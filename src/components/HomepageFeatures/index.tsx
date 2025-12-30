import clsx from 'clsx';
import Heading from '@theme/Heading';
import Translate from '@docusaurus/Translate';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Multi-Cluster Management',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        <Translate id="homepage.features.description.Multi-Cluster Management">
          Supports unified management of multiple Proxmox VE clusters through centralized authentication and configuration, simplifying the complexity of managing distributed PVE environments.
        </Translate>
      </>
    ),
  },
  {
    title: 'Real-time Monitoring',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        <Translate id="homepage.features.description.Real-time Monitoring">
          Provides real-time resource monitoring and metrics visualization, including CPU, memory, storage usage, as well as hotspot and risk alert functionality.
        </Translate>
      </>
    ),
  },
  {
    title: 'Complete Lifecycle Management',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        <Translate id="homepage.features.description.Complete Lifecycle Management">
          Supports complete virtual machine lifecycle management, including create, start, stop, migrate, backup and restore, as well as template management and automated deployment.
        </Translate>
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">
          <Translate id={`homepage.features.title.${title}`}>{title}</Translate>
        </Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

