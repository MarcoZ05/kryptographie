import { caesar } from './caesar.js';

const caesar_clearInput = document.getElementById('caesar_clearInput');
const caesar_cipherInput = document.getElementById('caesar_cipherInput');
const caesar_shiftInput = document.getElementById('caesar_shiftInput');

caesar_clearInput.addEventListener("keyup", () => {
    caesar_cipherInput.value = caesar(caesar_clearInput.value, Number(caesar_shiftInput.value) || 0);
});
caesar_cipherInput.addEventListener("keyup", () => {
    caesar_clearInput.value = caesar(caesar_cipherInput.value, -Number(caesar_shiftInput.value) || 0);
});
caesar_shiftInput.addEventListener("keyup", () => {
    caesar_cipherInput.value = caesar(caesar_clearInput.value, Number(caesar_shiftInput.value) || 0);
});

// test
caesar_clearInput.value = "azAZ";
caesar_shiftInput.value = -3
caesar_clearInput.dispatchEvent(new Event('keyup'));