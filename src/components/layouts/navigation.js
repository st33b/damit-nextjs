import Link from "next/link";

const Navigation = () => {

  return (
    <div className={`navigation`}>
      <div className={`navbar navbar-expand-md`}>
        <div className={`container-fluid`}>
          <button
            type={'button'}
            className={'navbar-toggler border-0'}
            data-bs-toggle={'collapse'}
            data-bs-target={'#navbarContent'}
            aria-controls={`navbarContent`}
            aria-expanded={false}
            aria-label={'Toggle navigation'}>
            <i className={'bi-list'} />
          </button>

          <ul className={`navbar-nav order-md-last`}>
            <li className={`nav-item`} title={'Registration is not yet open'}>
              <a className={`nav-link disabled`}
                 href={'#'}
                 onClick={() => {}}
              >
                Register
              </a>
            </li>
          </ul>

          <div className={`collapse navbar-collapse`} id={'navbarContent'}>
            <ul className={`navbar-nav mb-2 mb-md-0`}>
              <li className={`nav-item`}>
                <Link className={`nav-link`} href={'/#top'}>
                  Home
                </Link>
              </li>
              <li className={`nav-item`}>
                <Link className={`nav-link`} href={'/#location'}>
                  Bowling Center
                </Link>
              </li>
              <li className={`nav-item`}>
                <Link className={`nav-link`} href={'/#schedule'}>
                  Schedule
                </Link>
              </li>
              <li className={`nav-item`}>
                <Link className={`nav-link`} href={'/rules'}>
                  Rules
                </Link>
              </li>
              <li className={`nav-item`}>
                <Link className={`nav-link`} href={'/dallas'}>
                  Dallas
                </Link>
              </li>
              <li className={`nav-item`}>
                <Link className={`nav-link`} href={'/#igbo-local'}>
                  IGBO Local
                </Link>
              </li>
              <li className={`nav-item`}>
                <Link className={`nav-link`} href={'/#contact'}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Navigation;
