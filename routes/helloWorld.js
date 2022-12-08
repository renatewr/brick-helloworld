import {
  renderBrickHelloworld,
  getCssText,
} from "https://assets.acdn.no/pkg/@amedia/brick-helloworld/0.0.0-vHELLOWORLD-20230612221018/template.js";

//

export const renderHelloWorld = () => {
  const tmp1 = renderBrickHelloworld({
    text: "Hello World Number 1",
    version: "baseBodyM",
    inlineStyle: false,
  });
  const tmp2 = renderBrickHelloworld({
    text: "Hello World Number 2",
    version: "baseBodyM",
    inlineStyle: false,
  });

  return `
  <div class="themeAlfa">
  <h2>Alfa</h2>
  ${tmp1}
  ${tmp2}
  </div>
  <div class="themeBravo">
  <h2>Bravo</h2>
  ${tmp1}
  ${tmp2}
  </div>
  <div class="themeCharlie">
  <h2>Charlie</h2>
  ${tmp1}
  ${tmp2}
  </div>
  <div class="themeNettavisen">
  <h2>Nettavisen</h2>
  ${tmp1}
  ${tmp2}
  </div>
  <style>${getCssText()}</style>
  `;
};
