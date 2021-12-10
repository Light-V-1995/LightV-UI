<<template>
  <svg class="l-icon">
    <use :xlink:href="`#i-${name}`"></use>
  </svg>
</template>
<script>

import './svg'

export default {
  name:'L-Icon',
  props: ['name']
}
</script>
<style lang="scss" scoped>
.l-icon {width: 1em; height: 1em; }
</style>