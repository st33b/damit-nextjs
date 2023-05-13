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
        <span className={'d-md-none'}>
          DAMIT
        </span>
        <span className={'d-none d-md-inline'}>
          Dallas Area Masters Invitational Tournament
        </span>
      </p>
    </div>
  )
}

export default Footer;
