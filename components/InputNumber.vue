<template>
  <v-text-field
    v-bind="$attrs"
    step=".01"
    outlined
    style="width: 30%"
    label="Monto"
    prefix="$"
    :value="showValue"
    :type="showAsNumber ? 'number' : 'text'"
    @focus="onFocus"
    @blur="onBlur"
    @input="onInput"
  />
</template>

<script>
export default {
  props: {
    value: { type: Number, required: true },
    showNull: { type: Boolean, required: false, default: false },
  },
  data: () => ({
    showAsNumber: false,
  }),
  computed: {
    showValue () {
      return this.showAsNumber ? this.value.toString() : new Intl.NumberFormat('de-DE', { minimumFractionDigits: 2 }).format(this.value);
    },
  },
  methods: {
    onBlur () {
      this.showAsNumber = false;
    },
    onInput (value) {
      if (value) {
        this.$emit('input', value ? parseFloat(value) : '');
      }
    },
    onFocus () {
      this.showAsNumber = true;
    },
  },
};
</script>
