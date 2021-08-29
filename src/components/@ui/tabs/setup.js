export default {
  props: {
    tabsParams: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      tab: null,
    };
  },
  methods: {
    itemTab (tab) {
      console.log(tab)
    }
  },
};
