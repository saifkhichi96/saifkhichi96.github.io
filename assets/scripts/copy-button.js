// This assumes that you're using Rouge; if not, update the selector
const codeBlocks = document.querySelectorAll('pre code');
codeBlocks.forEach((codeBlock, index) => {
    // Create the copy button
    const copyButton = document.createElement('button');
    copyButton.className = 'copy-code-button';
    copyButton.innerHTML = '<i class="material-icons">content_copy</i> Copy';

    // Ensure the parent element is relatively positioned
    const pre = codeBlock.closest('pre');
    pre.style.position = 'relative';

    // Append the button to the pre element
    pre.appendChild(copyButton);
});

const copyCodeButtons = document.querySelectorAll('.copy-code-button');
copyCodeButtons.forEach((copyCodeButton, index) => {
  const code = codeBlocks[index].innerText;

  copyCodeButton.addEventListener('click', () => {
    // Copy the code to the user's clipboard
    window.navigator.clipboard.writeText(code);

    // Update the button text visually
    const { innerHTML: originalHTML } = copyCodeButton;
    copyCodeButton.innerText = 'Copied!';

    // (Optional) Toggle a class for styling the button
    copyCodeButton.classList.add('copied');

    // After 2 seconds, reset the button to its initial UI
    setTimeout(() => {
      copyCodeButton.innerHTML = originalHTML;
      copyCodeButton.classList.remove('copied');
    }, 2000);
  });
});
