export const vBackgroundImage = {
  created(el, { value }) {
    el.style.backgroundImage = `url(${value})`;
    el.style.backgroundSize = "cover";
    el.style.backgroundPosition = "center";
    el.style.backgroundRepeat = "no-repeat";
  },
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated(el, { value }) {
    el.style.backgroundImage = `url(${value})`;
    el.style.backgroundSize = "cover";
    el.style.backgroundPosition = "center";
    el.style.backgroundRepeat = "no-repeat";
  },
  beforeUnmount() {},
  unmounted() {},
};
