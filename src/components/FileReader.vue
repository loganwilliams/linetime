<template>
  <label class="text-reader">
    Load GPX file
    <input type="file" @change="loadTextFromFile" />
  </label>
</template>

<script>
export default {
  methods: {
    loadTextFromFile(ev) {
      const file = ev.target.files[0];
      const reader = new FileReader();

      reader.onload = (e) =>
        this.$emit("load", { file, content: e.target.result });
      reader.readAsText(file);
    },
  },
};
</script>

<style scoped lang="scss">
.text-reader {
  border: 1px solid #544e68;
  border-radius: 2px;
  cursor: pointer;
  padding: 0.5em;
  height: auto;
  background-color: #0d2b45;
  color: white;

  &:hover {
    background-color: #203c56;
  }

  input {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    opacity: 0;
  }
}
</style>
