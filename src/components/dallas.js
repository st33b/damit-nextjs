import styles from './dallas.module.scss';
import Link from "next/link";
import Image from "next/image";

import bigTex from '@/images/dallas/big-tex.jpeg';
import sportsBalls from '@/images/dallas/sports-balls.jpg';
import texMex from '@/images/dallas/tex-mex.jpg';
import sunshine from '@/images/dallas/sun-rays.jpg';

const Dallas = ({full}) => {
  // full determines whether we show a summary or the whole shebang
  // ... the whole shebang is intended to be on its own page, while
  // the summary is intended for the Dallas section of the main page

  return (
    <section className={styles.Dallas} id={'dallas'}>
      <h3 className={`section-heading mt-3`}>
        Dallas, Texas
      </h3>

      <div className={styles.JumboImage}>
        <div className={`${styles.BackgroundColor} ${styles.DowntownDaytimeColor}`}/>
        <div className={`${styles.BackgroundImage} ${styles.DowntownDaytimeImage}`}/>
      </div>
      <div className={`${styles.Credit}`}>
        Image via{' '}
        <a href={'https://www.pexels.com/photo/architecture-buildings-business-city-280193/'}
           target={'_blank'}>
          Pixabay
        </a>
      </div>

      <p className={'mt-3'}>
        Home to the Texas State Fair, the Perot Museum of Nature and Science, and more professional sports teams than you can shake a hockey stick at, Dallas&mdash;not just Dallas itself, but the whole Dallas-Ft. Worth
        metroplex&mdash;has something to offer for everyone.
      </p>

      {!full && (
        <p className={styles.MoreLink}>
          <Link href={'/dallas'}
                class={`icon-link icon-link-hover`}
                role={`button`}>
            More
            <i className={'bi-arrow-right'} aria-hidden={true}/>
          </Link>
        </p>
      )}
      {full && (
        <div className={'row'}>
          <div className={`${styles.Thing} card col-12 col-md-8 col-xl-6 `}>
            <div className={'row g-0'}>
              <div className={`col-sm-4 d-flex flex-column`}>
                <div className={`${styles.FlippyImage} flex-grow-1`}>
                  <Image src={sunshine}
                         alt={'The sun shining in a partly cloudy sky'}
                         className={`${styles.Img}`}
                         sizes={'(max-width: 575px) 90vw, (max-width: 767px) 50vw, (max-width: 1199px) 20vw (min-width: 1200px) 15vw'}
                  />
                </div>
                <div className={`${styles.Credit}`}>
                  Image by{' '}
                  <a href={'https://www.pexels.com/photo/white-clouds-on-sky-3768/'}
                     target={'_blank'}>
                    Skitterphoto
                  </a>
                </div>
              </div>
              <div className={'col-sm-8'}>
                <div className={`card-body ${styles.CardBody}`}>
                  <div className={'card-title'}>
                    <h4>
                      Weather
                    </h4>
                  </div>
                  <p>
                    It doesn&apos;t get much more pleasant outside than Dallas in October. The summer heat and humidity have receded, and the coolness of winter is still many weeks away.
                  </p>
                  <p>
                    <span className={'d-block'}>
                      Average high:{' '}
                      <span className={styles.HighTemp}>
                        80&deg;F (27&deg;C)
                      </span>
                    </span>
                    <span className={'d-block'}>
                      Average low:{' '}
                      <span className={styles.LowTemp}>
                        59&deg;F (15&deg;C)
                      </span>
                    </span>
                  </p>
                  <p>
                    Let&apos;s just say there&apos;s a reason the Texas State Fair happens in October!
                  </p>
                </div>
              </div>
            </div>
          </div>


          <div className={`${styles.Thing} card col-12 col-sm-6 col-md-4 col-xl-3`}>
            <div className={`${styles.Image}`}>
              <Image src={bigTex}
                     alt={'Big Tex'}
                     className={`${styles.Img}`}
                     sizes={'(max-width: 575px) 95vw, (max-width: 767px) 50vw, (max-width: 1399px) 33vw'}
              />
            </div>
            <div className={`${styles.Credit}`}>
              Image by{' '}
              <a href={'https://www.flickr.com/photos/steevithak/10197656524'}
                 target={'_blank'}>
                Steve Rainwater
              </a>
            </div>
            <div className={`card-body ${styles.CardBody}`}>
              <div className={'card-title'}>
                <h4>
                  The Texas State Fair
                </h4>
              </div>
              <p>
                There&apos;s no better place to find thrill rides, live concerts, butter sculptures, pig races, creative fried foods, and Texans of all stripes!
              </p>
              <p>
                The Fair runs September 29 - October 22.
              </p>
              <p>
                <a href={'https://bigtex.com/'}
                   className={styles.ExternalLink}
                   target={'_blank'}>
                  Check it out
                </a>
              </p>
            </div>
          </div>

          <div className={`${styles.Thing} card col-12 col-sm-6 col-md-4 col-xl-3`}>
            <div className={`${styles.Image}`}>
              <Image src={sportsBalls}
                     alt={'Sports balls'}
                     className={`${styles.Img}`}
                     sizes={'(max-width: 575px) 95vw, (max-width: 767px) 50vw, (max-width: 1399px) 33vw'}
              />
            </div>
            <div className={`${styles.Credit}`}>
              Image via{' '}
              <a href={'https://www.peakpx.com/455682/football-basketball-and-soccer-ball-lot'}
                 target={'_blank'}>
                PeakPx
              </a>
            </div>
            <div className={`card-body ${styles.CardBody}`}>
              <div className={'card-title'}>
                <h4>
                  OMG Sports!
                </h4>
              </div>
              <p>
                October is prime season for football, baseball (well, the playoffs, at least), basketball, hockey, soccer (the <em>real</em> football!). No matter which team you root for or which sport you enjoy the most, you&apos;re sure to find a game or match to cheer or jeer at!
              </p>
            </div>
          </div>

          <div className={`${styles.Thing} card col-12 col-sm-6 col-md-4 col-xl-3`}>
            <div className={`${styles.Image}`}>
              <Image src={texMex}
                     alt={'Tex-Mex food'}
                     className={`${styles.Img}`}
                     sizes={'(max-width: 575px) 95vw, (max-width: 767px) 50vw, (max-width: 1399px) 33vw'}
              />
            </div>
            <div className={`${styles.Credit}`}>
              Image via{' '}
              <a href={'https://pxhere.com/en/photo/1622599'}
                 target={'_blank'}>
                PxHere
              </a>
            </div>
            <div className={`card-body ${styles.CardBody}`}>
              <div className={'card-title'}>
                <h4>
                  Food! Glorious Food!
                </h4>
              </div>
              <p>
                Tex-Mex. Barbecue. Steak. Vegan. Oh yeah, Dallas can please any palate. Here are some of our favorites:
              </p>
              <ul>
                <li>
                  <a href={'#'}
                     target={'_blank'}
                     className={styles.ExternalLink}>
                    Restaurant
                  </a>
                </li>
                <li>
                  <a href={'#'}
                     target={'_blank'}
                     className={styles.ExternalLink}>
                    Restaurant
                  </a>
                </li>
                <li>
                  <a href={'#'}
                     target={'_blank'}
                     className={styles.ExternalLink}>
                    Restaurant
                  </a>
                </li>
                <li>
                  <a href={'#'}
                     target={'_blank'}
                     className={styles.ExternalLink}>
                    Restaurant
                  </a>
                </li>
                <li>
                  <a href={'#'}
                     target={'_blank'}
                     className={styles.ExternalLink}>
                    Restaurant
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/*</div>*/}
        </div>
      )}
    </section>
  )
}

export default Dallas;
