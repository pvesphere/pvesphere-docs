import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import Translate from '@docusaurus/Translate';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">
          <Translate id="homepage.tagline" description="Homepage tagline">
            {siteConfig.tagline}
          </Translate>
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/tutorials/intro">
            <Translate id="homepage.cta.button">Get Started - 5min ⏱️</Translate>
          </Link>
        </div>
      </div>
    </header>
  );
}

function DemoSection() {
  return (
    <section className={styles.demoSection}>
      <div className="container">
        <div className="row">
          <div className="col col--12">
            <Heading as="h2" className={styles.demoTitle}>
              <Translate id="homepage.demo.title">Feature Demo</Translate>
            </Heading>
            <div className={styles.demoContainer}>
              <img
                src={require('@site/static/img/pvesphere-review-rc01.gif').default}
                alt="PveSphere Feature Demo"
                className={styles.demoGif}
              />
            </div>
            <p className={styles.demoDescription}>
              <Translate id="homepage.demo.description">
                PveSphere provides an intuitive web interface that makes it easy to manage multiple Proxmox VE clusters. Monitor resources, manage virtual machines, and configure storage from a unified dashboard - everything at your fingertips.
              </Translate>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description={siteConfig.tagline}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <DemoSection />
      </main>
    </Layout>
  );
}

