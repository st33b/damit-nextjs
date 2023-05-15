import Image from "next/image";
import logo from '../../images/damit.png';

const Footer = () => {

  return (
    <div>
      <hr />
      <Image src={logo}
             alt={'DAMIT logo'}
             className={`img-fluid footer-image`}
      />
      <p className={'d-flex justify-content-center'}>
        <span>
          &copy; 2023&nbsp;
        </span>
        <span className={'d-md-none pe-2'}>
          DAMIT
        </span>
        <span className={'d-none d-md-inline pe-2'}>
          Dallas Area Masters Invitational Tournament
        </span>
        <span className={`d-inline-block`}>
          <a href={'https://www.facebook.com/Damitbowling/'}
             className={'ps-2'}>
            <i className={'bi bi-facebook'} aria-hidden={true} />
            <span className={'visually-hidden'}>
              DAMIT on Facebook
            </span>
          </a>
        </span>
      </p>
    </div>
  )
}

export default Footer;
