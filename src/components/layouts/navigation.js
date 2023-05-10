import styles from './navigation.module.scss';

const Navigation = () => {

  return (
    <div className={styles.Navigation}>
      <div className={`navbar navbar-expand-lg`}>
        <div className={`container-fluid`}>
          <button
                  type={'button'}
                  className={'navbar-toggler ms-auto'}
                  data-mdb-toggle={'collapse'}
                  data-mdb-target={'#navbarContent'}
                  aria-controls={`navbarContent`}
                  aria-expanded={false}
                  aria-label={'Toggle navigation'}>
            <i className={'fas fa-bars'} />
          </button>

          <div className={`collapse navbar-collapse`} id={'navbarContent'}>

            <ul className={`navbar-nav w-100 mb-2 mb-lg-0`}>
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

              {/* Let's put the Register link on the right on larger viewports */}
              <li className={`ms-lg-auto`}>
                <a className={`nav-link`} href={'#top'}>
                  Register
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
