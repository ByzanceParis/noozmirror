import './style.css'

declare global {
  interface Window { NoozMirror: any; }
}

const mirror = new window.NoozMirror()
console.log(mirror);
const b64 = await mirror.takePicture({
  quality:1,
  width: 300,
});
const typescriptLogo = `${b64}`;
const turnedOn = await mirror.toggleFlashlight(true);
console.log(turnedOn);


mirror.onRfid((msg:any) => {
  console.log(msg.id);
  console.log(msg.action); 
});
console.log(turnedOn);





document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>    
    <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    <h1>Script Tester</h1>
    <p class="read-the-docs">
      Press r to test RFID event 
    </p>
  </div>
`




