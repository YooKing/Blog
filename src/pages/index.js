import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import { FaGithub} from 'react-icons/fa';
import { MdEmail } from "react-icons/md";

function Homepage() {
  const { siteConfig, primaryColor } = useDocusaurusContext();
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f7f7f7' }}>
        <h1 style={{ fontSize: 64 }}>{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <p>你可以随意逛逛，查看博客、项目、友情链接等等。</p>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <a href="https://github.com/YooKing" target="_blank" rel="noopener noreferrer" style={{ marginRight: 20 }}>
            <FaGithub style={{ fontSize: 25, color: primaryColor }} />
          </a>
          <a href='mailto:yooking.id@outlook.com' target="_blank" rel="noopener noreferrer">
            <MdEmail style={{ fontSize: 25, color: primaryColor }} /> 
          </a>
        </div>
      </div>
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img src="img/undraw_Multitasking_re_ffpb.png" alt="placeholder" style={{ maxHeight: '100%', maxWidth: '100%' }} />
      </div>
  
    </div>
  );
}



export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      
      <main>
      <Homepage />
      </main>
    </Layout>
  );
}
