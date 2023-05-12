import logo from '../../images/damit.png';
import Image from "next/image";

const Footer = () => {

  return (
    <div>
      <hr />
      <Image src={logo}
             alt={'DAMIT logo'}
             className={'img-fluid'}
      />
      <p>
        &copy; 2023{' '}
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
