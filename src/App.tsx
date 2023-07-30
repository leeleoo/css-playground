import React from 'react';
import "./App.css";
import 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-css';
import 'prismjs/themes/prism.css'; //Example style, you can use another
import CodeView from './components/CodeView';
import styled from 'styled-components';

const ShadowInsetCss = `
  box-shadow: inset 8px 8px 8px rgb(0, 0, 0,0.3),
  inset -8px -8px 8px rgba(255,255,255,0.7);
`

const Container = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 30px;
`
const ShadowOutsetCss = `
  box-shadow: 8px 8px 8px rgb(0, 0, 0,0.3),
  -8px -8px 8px rgba(255,255,255,0.7);
`
const ShadowMixCss = `
  box-shadow: inset 8px 8px 8px rgb(0, 0, 0,0.3),
  inset -8px -8px 8px rgba(255,255,255,0.7),
  -10px -10px 10px rgba(0,0,0,0.4);
`
const ShadowInsetComponent = styled(Container)`
  ${ShadowInsetCss}
`
const ShadowOutsetComponent = styled(Container)`
  ${ShadowOutsetCss}
`
const ShadowMixComponent = styled(Container)`
  ${ShadowMixCss}
`
const ShadowNightCss = `
  box-shadow: 0px 0px 12px 0px rgba(0,255,255,0.7);
`
const ShadowNightCss2 = `
  box-shadow: 50px 0px 0px 0px rgba(0,255,255,0.7);
`

const ShadowNightComponent = styled(Container)`
  ${ShadowNightCss}
  width: 100px;
  height: 100px;
  border-radius: 50%;
`
const ShadowNight2Component = styled(Container)`
  ${ShadowNightCss2}
  width: 100px;
  height: 100px;
  border-radius: 50%;
`
const ShadowHoverCss = `
  box-shadow: 0px 0px 12px 0px rgba(0,0,0,0.5);
  transition: all 0.3s ease-in-out;
  &:hover{
    transform: translateY(-8px) scale(1.01,1.01);
    box-shadow: 0px 10px 20px rgba(0,0,0,0.3);
  }
`
const ShadowHoverComponent = styled(Container)`
  ${ShadowHoverCss}
`


function App() {
  return (
    <div>
      <CodeView css={ShadowInsetCss}>
        <ShadowInsetComponent></ShadowInsetComponent>
      </CodeView>
      <CodeView css={ShadowOutsetCss}>
        <ShadowOutsetComponent></ShadowOutsetComponent>
      </CodeView>
      <CodeView css={ShadowMixCss}>
        <ShadowMixComponent></ShadowMixComponent>
      </CodeView>  
      <CodeView css={ShadowNightCss}>
        <ShadowNightComponent></ShadowNightComponent>
      </CodeView>
      <CodeView css={ShadowNightCss2}>
        <ShadowNight2Component></ShadowNight2Component>
      </CodeView>
      <CodeView css={ShadowHoverCss}>
        <ShadowHoverComponent></ShadowHoverComponent>
      </CodeView>  
    </div>


  );
}

export default App;