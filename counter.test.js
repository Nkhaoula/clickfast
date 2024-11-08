const { resetCounter, setupClicker } = require('./script');
describe("Compteur de clics", () => {
     beforeAll(() => {
    // Initialiser le DOM pour les tests    
    document.body.innerHTML = `
    <div id="container">
      <button id="button-clicker">Click !!!</button>
     <p id="counter">0</p>
     </div> `;
      setupClicker(); 
     // Initialiser les écouteurs d'événements après avoir créé le DOM  
     });
beforeEach(() => {
     resetCounter();
      // Réinitialiser le compteur avant chaque test  
      });
test("Le compteur s'incrémente lors d'un clic sur le bouton", () => {
     const button = document.getElementById("button-clicker");
      const counterDisplay = document.getElementById("counter");
// Simuler un clic sur le bouton    
button.click();expect(counterDisplay.innerHTML).toBe("1");
// Effectuer un deuxième clic  
button.click();
 expect(counterDisplay.innerHTML).toBe("2");
 });
test("Le compteur commence à 0", () => {
     const counterDisplay = document.getElementById("counter");
      expect(counterDisplay.innerHTML).toBe("0");
     });});