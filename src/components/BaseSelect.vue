<template>
  <div class="flex gap-2">
    <BaseButton :type="BUTTON_NEUTRAL" @click="select(null)">
      <BaseIcon :name="ICON_X_MARK"/>
    </BaseButton>

    <select class="w-full truncate rounded bg-gray-100 py-1 px-2 text-2xl"
            @change="select($event.target.value)">
      <option :selected="isNotSelected" disabled value="">{{ placeholder }}</option>
      <option v-for="{value,label} in options" :key="value" :value="value" :selected="value == selected">
        {{ label }}
      </option>

    </select>
  </div>
</template>

<script setup>
import {computed} from "vue"
import BaseButton from "./BaseButton.vue";
import BaseIcon from "./BaseIcon.vue";
import {ICON_X_MARK} from '../icons'
import {validateSelectOptions, isSelectValueValid, isUndefinedOrNull} from "../validators"
import {BUTTON_NEUTRAL} from "../constants"
import {normalizeSelectValue} from "../functions"

const props = defineProps({
  'options': {
    type: Array,
    required: true,
    validator: validateSelectOptions
  },
  'placeholder': {
    required: true,
    type: String,
    default: "Rest"
  },
  'selected': [String, Number]
})

const emit = defineEmits({
  select: isSelectValueValid
})

const isNotSelected = computed(() => isUndefinedOrNull(props.selected))

function select(value) {
  emit('select', normalizeSelectValue(value))
}
</script>
