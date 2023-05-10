const Navigation = () => {

  return (
    <div>
      <div className={`navbar navbar-expand-lg`}>
        <div className={`container-fluid`}>
          <button
            type={'button'}
            className={'navbar-toggler me-auto'}
            data-mdb-toggle={'collapse'}
            data-mdb-target={'#navbarContent'}
            aria-controls={`navbarContent`}
            aria-expanded={false}
            aria-label={'Toggle navigation'}>
            <i className={'fas fa-bars'} />
          </button>

          {/*<div className={`d-flex flex-grow-1 align-items-center`}>*/}
            <ul className={`navbar-nav order-lg-last`}>
              <li className={`nav-item`}>
                <a className={`nav-link`} href={'#top'}>
                  Register
                </a>
              </li>
            </ul>
          {/*</div>*/}

          <div className={`collapse navbar-collapse`} id={'navbarContent'}>
            <ul className={`navbar-nav mb-2 mb-lg-0`}>
              <li className={`nav-item`}>
                <a className={`nav-link`} href={'#top'}>
                  Home
                </a>
              </li>
              <li className={`nav-item`}>
                <a className={`nav-link`} href={'#schedule'}>
                  Schedule
                </a>
              </li>
              <li className={`nav-item`}>
                {/* What does Next Router want us to do with this? */}
                <a className={`nav-link`} href={'/rules'}>
                  Rules
                </a>
              {/* ****** */}
              </li>
              <li className={`nav-item`}>
                <a className={`nav-link`} href={'#location'}>
                  Bowling Center
                </a>
              </li>
              <li className={`nav-item`}>
                <a className={`nav-link`} href={'#contact'}>
                  Contact
                </a>
              </li>
              <li className={`nav-item`}>
                <a className={`nav-link`} href={'#dallas'}>
                  Dallas
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Navigation;
