import { storiesOf } from '@storybook/vue'

import VueI18n from 'vue-i18n'

import Issue63 from './component.vue'

storiesOf('Issues/#63', module).add(
  'Should display error message when failed to get default',
  () => ({
    components: { Issue63 },
    i18n: new VueI18n({
      locale: 'en',
      messages: {
        en: {
          hello: 'Hello, World'
        }
      }
    }),
    template: '<issue-63/>'
  }),
  {
    info: {
      summary: '<https://github.com/pocka/storybook-addon-vue-info/issues/63>',
      useDocgen: false
    }
  }
)
