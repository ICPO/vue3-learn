<template>
  <button :class="classes">
    <slot></slot>
  </button>
</template>
<script>
import {TYPE_CLASSES} from "../constants"
</script>

<script setup>
import {isButtonValid} from "../validators"
import {BUTTON_PRIMARY} from "../constants";

const props = defineProps({
  type: {
    type: String,
    validator: isButtonValid,
    default: BUTTON_PRIMARY
  }
})
const classes = [
  'rounded p-3 disabled:cursor-not-allowed disabled:opacity-50', TYPE_CLASSES[props.type]
]
</script>