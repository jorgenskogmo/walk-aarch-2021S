/*! 

 *******************************************************************************
 * Hi!                                                                         *
 * Drop js@dearstudio.dk an email if you want access to the un-minified source *
 * (CC BY-NC-SA 4.0)                                                           *
 *******************************************************************************
 
*/

import './base.css'
import './menu.css'
import './fonts.css'
import './styles.css'

import PAGES from './pages.js'
import DATA from '../tools/students.json';
import {nl2br} from './utils.js';
import {buildMenu, clearSelection, collapseAll} from './menu.js';
import {renderOffgrid, cleanupOffgrid} from './layout-offgrid.js'
import {modeToClass, nextMode } from './modes.js'

const MODE = {onoff:true, gridline:true};

let MOUSE_PRESSED = false;
let SEARCH_STRING = '';
let PROJECTS_ELM_SCROLLWIDTH = 0;
let isMobile = false
let throttleResizeTimeout = null

const PROJECTS_ELM = document.querySelector('.projects');

const onHashChanged = () => {
  const h = window.location.hash
  console.log('onHashChanged', h);

  cleanupOffgrid('.projects')
  
  if( h.indexOf('#page:') === 0 ){
    SEARCH_STRING = ''
    render_projects(false);
    render_page(h.split('#page:')[1])

  }else if( h.indexOf('#search') === 0 ){
    SEARCH_STRING = h.split('#search:')[1]
    MODE.onoff = true
    MODE.gridline = true
    render_projects();
    render_search();

  }else if( h.indexOf('#list') === 0 ){
    render_projects(false);
    render_list( h.split('#list:')[1] )
  
  }else{
    SEARCH_STRING = ''

    render_projects();
    render_page( modeToClass() )
  }

  if( isMobile ){
    console.log('Mobile onHashChanged');
    const h2 = document.querySelector('.copy > h2')
    if( h2 ){
      // console.log('has h2');
      h2.addEventListener('click', () => {
        nextMode()
        window.location.hash = ''
        
        render_page( modeToClass() )
        render()
        clearSelection()
        collapseAll()

        onHashChanged()

        // render()
      })
    }

    console.log('Mobile onHashChanged calling render()');
    render()
  }

}

const setup = () => {

  window.MODE = MODE

  onResized()
  onHashChanged()
  buildMenu()
  render_toggle()

  window.addEventListener('resize', throttleResized );
  window.addEventListener('hashchange', onHashChanged );
  window.addEventListener('mousedown', () => { MOUSE_PRESSED = true }, false);
  window.addEventListener('mouseup', () => { MOUSE_PRESSED = false }, false);

  document.querySelector('.modetoggle > .onoff').addEventListener('click', (e) => {
    MODE.onoff = !MODE.onoff

    const iscat = window.location.hash.indexOf('cat:') > 0
    if( !iscat ){
      window.location.hash = ''
      clearSelection()
      collapseAll()
    }

    render_toggle();
    render_page( modeToClass() )
    render()

  })
  document.querySelector('.modetoggle > .gridline').addEventListener('click', (e) => {
    MODE.gridline = !MODE.gridline

    const iscat = window.location.hash.indexOf('cat:') > 0
    if( !iscat ){
      window.location.hash = ''
      clearSelection()
      collapseAll()
    }

    render_toggle();
    render_page( modeToClass() )
    render();
  })


  document.querySelector('.logo').addEventListener('click', () => {
    if( isMobile) document.querySelector('.menu').classList.toggle('open')
  });

  document.querySelectorAll('.menu [data-menu-action="go"]').forEach(el => {
    el.addEventListener('click', () => {
      if( isMobile) {
        document.querySelector('.menu').classList.remove('open')
      }
    })
  });
  
  update()
  render()

  // open submenu by url
  const h = window.location.hash
  if( h.indexOf('#page:') === 0 ){
    document.querySelector('div[data-menu-key="about"]').click()
  }
  if( h.indexOf('#cat:') === 0 ){
    document.querySelector('div[data-menu-key="categories"]').click()
  }

  
  render_intro()
}

const render_intro = () => {
  if( window.location.hash != '' ){
    document.querySelector('.intro').style.display = 'none'
    return
  }

  if( isMobile ){
    document.querySelector('.intro').innerHTML = `
      <video src="assets/1080x1920.mp4" autoplay muted playsinline></video>`
  }else{
    document.querySelector('.intro').innerHTML = `
      <video src="assets/1920x1080.mp4" autoplay muted playsinline></video>`
  }

  document.querySelector('.intro > video').addEventListener('click', (e) => {
    document.querySelector('.intro').classList.add('done')
    setTimeout( () => {
      document.querySelector('.intro').classList.add('hidden')
    }, 500)
  });

  document.querySelector('.intro > video').addEventListener('loadeddata', (e) => {
    setTimeout( () => {
      document.querySelector('.intro').classList.add('done')
      setTimeout( () => {
        document.querySelector('.intro').classList.add('hidden')
      }, 500)
    }, Math.floor(e.target.duration * 1000) )
  })


}

const render_list = (list) => {
  let listHeadline = list
  let listContent = ''

  if( list === 'architects' ){
    listHeadline = 'Architects'
    listContent = '<br />'
    DATA.forEach( s => {
      listContent += `<a href="${s.slug}">${s.name}</a>`
    })
  }
  
  
  let html = `
    <h2>${listHeadline}</h2>
    ${listContent}
  `
  document.querySelector('.copy').setAttribute('data-page', list)
  document.querySelector('.copy').innerHTML = html
}

const render_page = (page) => {

  let html = `
    <h2>404</h2>
    <p>Page "${page}" not declared in pages.js</p>
  `

  if( Object.keys(PAGES).includes(page) ){
    html = PAGES[page]
    html = html.trim()
    html = nl2br(html)
    html += '<br />'
    html += '<br />'
  }

  document.querySelector('.copy').setAttribute('data-page', page)
  document.querySelector('.copy').innerHTML = html
}

const render_search = () => {
  document.querySelector('.copy').setAttribute('data-page', 'search')
  document.querySelector('.copy').innerHTML = `
    <h2>Search</h2>
    <div>
      <input class="searchfield" type="text" value="${SEARCH_STRING || ''}" placeholder="Search for an Architect here">
    </div>
  `
  document.querySelector('.searchfield').addEventListener("input", (el) => {
    SEARCH_STRING = el.target.value.toLowerCase()
    render_projects()
  })

  document.querySelector('.searchfield').addEventListener("change", (el) => {
    window.location.hash = 'search:'+ el.target.value.toLowerCase()
  })
}

const render_projects = (show=true) => {
  console.log('render_projects isMobile:', isMobile, 'MODE:', MODE);

  const isSearch = SEARCH_STRING != '';

  if( isSearch ){
    MODE.onoff = true
    MODE.gridline = true
  }

  if( show === false ){
    PROJECTS_ELM.innerHTML = ''
    return;
  }

  const themefilter = window.location.hash.indexOf('#cat:') === 0
    ? window.location.hash.split('#cat:')[1]
    : null;

  let html = ''
  DATA.forEach( (s,i) => {
    if( themefilter && s.theme != themefilter ){
      // filter out
    }else if( isSearch ){

      const search = `${s.name}`.toLowerCase()
      const match = search.indexOf(SEARCH_STRING) > -1

      if( match ){
        html += `<div class="project" data-url="${s.slug}">
          <img class="project-image" src="images/${s.id}.jpg" alt="${s.title}"/>
          <div class="project-meta"><strong>${s.name}</strong><br />
            <div class="project-title">${s.title}</div>
          </div>
        </div>`
      }
    
    }else{
      html += `<div class="project" data-url="${s.slug}">
        <img class="project-image" src="images/${s.id}.jpg" alt="${s.title}"/>
        <div class="project-meta">${s.name}</div>
      </div>`
    }
  })

  if( isSearch ){
    PROJECTS_ELM.classList.add('search')
  }else{
    PROJECTS_ELM.classList.remove('search')
  }

  PROJECTS_ELM.innerHTML = html

  document.querySelectorAll('.project').forEach( el => {
    el.addEventListener('click', () => {
      // document.location.href = el.getAttribute('data-url')
      // document.location.href = el.getAttribute('data-url')
      window.open( el.getAttribute('data-url') )
    })
  })
}

const render_toggle = () => {
  document.querySelector('.modetoggle > span.onoff').innerHTML = MODE.onoff ? 'ON' : 'OFF';
  document.querySelector('.modetoggle > span.gridline').innerHTML = MODE.gridline ? 'GRID' : 'LINE';
}

const render = () => {  

  // make sure no online clones are left
  PROJECTS_ELM.querySelectorAll('div[data-clone]').forEach( el => el.remove() )

  cleanupOffgrid('.projects')

  const className = modeToClass()

  console.log('render', MODE, className);

  // fullwidth views
  if( className === 'online' || className === 'offline' ){
    document.querySelector('#menuspacer').style.display = 'none'
    document.querySelector('.menu').style.position = 'unset'
  }else{
    document.querySelector('#menuspacer').style.display = 'block'
    document.querySelector('.menu').style.position = 'absolute'
  }


  PROJECTS_ELM.classList = 'projects '+ className

  if( className === 'offgrid' ){
    renderOffgrid('.projects')
  }

  if( className === 'online' ){
    PROJECTS_ELM_SCROLLWIDTH = PROJECTS_ELM.scrollWidth

    // duplicate fist nodes
    for(let i=0; i<20; i++){
      if( PROJECTS_ELM.childNodes[i] ){
        const el = PROJECTS_ELM.childNodes[i].cloneNode(true)
        el.setAttribute('data-clone', true)
        PROJECTS_ELM.appendChild( el )
        // PROJECTS_ELM.appendChild( PROJECTS_ELM.childNodes[i].cloneNode(true) )
      }
    }

    PROJECTS_ELM_SCROLLWIDTH -= 150 // 150 is a magic number :( 
    // el is 200px wide, and has a margin of 40px

  }
}

const update = () => {
  if( !MOUSE_PRESSED && MODE.onoff && !MODE.gridline ){
    PROJECTS_ELM.scrollBy(1,0)
    if( PROJECTS_ELM.scrollLeft > PROJECTS_ELM_SCROLLWIDTH){
      PROJECTS_ELM.scrollTo(0,0)
    }
  }
  requestAnimationFrame( update )
}

const onResized = () => {
  console.log('onResized');
  if( screen.width <= 699 ){
    document.body.classList.add('mobile')
    isMobile = true
  }else{
    document.body.classList.remove('mobile')
    isMobile = false
  }

  if( iOS() ){
    document.body.classList.add('ios')
  }
}

const throttleResized = () => {
  if( throttleResizeTimeout ){
    clearTimeout( throttleResizeTimeout )
  }
  throttleResizeTimeout = setTimeout(onResized, 10)
}

function iOS() {
  return [
    'iPad Simulator',
    'iPhone Simulator',
    'iPod Simulator',
    'iPad',
    'iPhone',
    'iPod'
  ].includes(navigator.platform)
  // iPad on iOS 13 detection
  || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
}


setup()
