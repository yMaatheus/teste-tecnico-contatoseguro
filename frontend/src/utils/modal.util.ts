export const closeModal = (id: string) => {
  const checkbox = document.querySelector(`#${id}`) as HTMLInputElement;
  if (checkbox) {
    checkbox.checked = false;
  }
};
