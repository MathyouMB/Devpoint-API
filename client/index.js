
var demo = {angle: 0}

var demo1 = {angle1: 0}

const store = {
  debug: true,
  state: {
    ang: 0,
    ang1: 0,
    dist: 0,
    mov: TweenLite.to(demo, 700, {angle:365, repeat: -1, onUpdate: function () {
      store.state.ang = demo.angle
    }}),
    mov1: TweenLite.to(demo1, 700, {angle1:365, repeat: -1, onUpdate: function () {
      store.state.ang1 = demo1.angle1
    }}),
    ecosystem: [
      {name: 'Help', icon: 'fa-question', viewName: 'help',elements: [
        {name: 'Forum', url: 'https://forum.vuejs.org/', icon: 'fa-comments'},
        {name: 'Chat', url: 'https://chat.vuejs.org/', icon: 'fa-comments-o'}
        ]},
      {name: 'Tooling', icon: 'fa-wrench', viewName: 'tooling', elements: [
        {name: 'Devtools', url: 'https://github.com/vuejs/vue-devtools', icon: 'fa-code'},
        {name: 'Webpack Template', url: 'https://vuejs-templates.github.io/webpack', icon: 'fa-file-code-o'},
        {name: 'Vue Loader', url: 'https://vue-loader.vuejs.org/', icon: 'fa-spinner'}]
      },
      {name: 'Core Libraries', icon: 'fa-star', viewName: 'core',elements: [
        {name: 'Vue Router', url: 'https://router.vuejs.org/', icon: 'fa-hdd-o'},
        {name: 'Vuex', url: 'https://vuex.vuejs.org/', icon: 'fa-exchange'},
        {name: 'Vue Server Renderer', url: 'https://ssr.vuejs.org/', icon: 'fa-puzzle-piece'}
        ]},
      {name: 'News', icon: 'fa-newspaper-o', viewName: 'news', elements: [
        {name: 'Roadmap', url: 'https://github.com/vuejs/roadmap', icon: 'fa-map-o'},
        {name: 'Twitter', url: 'https://twitter.com/vuejs', icon: 'fa-twitter'},
        {name: 'Blog', url: 'https://medium.com/the-vue-point', icon: 'fa-rss'},
        {name: 'Jobs', url: 'https://vuejobs.com/?ref=vuejs', icon: 'fa-money'}
        ]},
      {name: 'Resource Lists', icon: 'fa-bookmark-o', viewName: 'resources', elements: [
        {name: 'Official Repos', url: 'https://github.com/vuejs', icon: 'fa-github'},
        {name: 'Vue Curated', url: 'https://curated.vuejs.org/', icon: 'fa-trophy'},
        {name: 'Awesome Vue', url: 'https://github.com/vuejs/awesome-vue', icon: 'fa-list-alt'}
      ]}
    ]
  }
}

const ecosystem_template = `
<z-view class="main">

  <span><strong>{{ ecosystem.name }}</strong></span><br>
  <span> Ecosystem </span>

  <section slot="extension">

        <z-spot 
          v-for="(element, index) in ecosystem.elements"
          class="inactive"
          :angle="(360 / ecosystem.elements.length * index) - sharedState.ang1 * 11"
          :distance="130"
          size="medium"
          @mouseover.native="active"
          @touchstart.native="active"
          @mouseout.native="inactive"
          @touchend.native="inactive"
     			@click.native.prevent="this.window.open(element.url, '_blank')"
          :label="element.name"
          :key= "index">

          <i class="fa" :class="element.icon"></i>

        </z-spot>

    </section>

</z-view>`

const resources = {
  name: 'resources',
  template: ecosystem_template,
  data () {
    return {
      sharedState: store.state,
      ecosystem: store.state.ecosystem[4]
    }
  },
  methods: {
    active (event) {
      var target = event.target.parentElement
      if (target.classList.contains('inactive')) {
        target.classList.remove('inactive')
        target.classList.add('active')
        this.sharedState.mov1.pause()
      }
    },
    inactive (event) {
      var target = event.target.parentElement
      if (target.classList.contains('active')) {
        target.classList.remove('active')
        target.classList.add('inactive')
        this.sharedState.mov1.play()
      }
    }
  },
  destroyed () {
    this.sharedState.mov.play()
  }
}

const news = {
  name: 'news',
  template: ecosystem_template,
  data () {
    return {
      sharedState: store.state,
      ecosystem: store.state.ecosystem[3]
    }
  },
  methods: {
    active (event) {
      var target = event.target.parentElement
      if (target.classList.contains('inactive')) {
        target.classList.remove('inactive')
        target.classList.add('active')
        this.sharedState.mov1.pause()
      }
    },
    inactive (event) {
      var target = event.target.parentElement
      if (target.classList.contains('active')) {
        target.classList.remove('active')
        target.classList.add('inactive')
        this.sharedState.mov1.play()
      }
    }
  },
  destroyed () {
    this.sharedState.mov.play()
  }
}

const core = {
  name: 'core',
  template: ecosystem_template,
  data () {
    return {
      sharedState: store.state,
      ecosystem: store.state.ecosystem[2]
    }
  },
  methods: {
    active (event) {
      var target = event.target.parentElement
      if (target.classList.contains('inactive')) {
        target.classList.remove('inactive')
        target.classList.add('active')
        this.sharedState.mov1.pause()
      }
    },
    inactive (event) {
      var target = event.target.parentElement
      if (target.classList.contains('active')) {
        target.classList.remove('active')
        target.classList.add('inactive')
        this.sharedState.mov1.play()
      }
    }
  },
  destroyed () {
    this.sharedState.mov.play()
  }
}

const tooling = {
  name: 'tooling',
  template: ecosystem_template,
  data () {
    return {
      sharedState: store.state,
      ecosystem: store.state.ecosystem[1]
    }
  },
  methods: {
    active (event) {
      var target = event.target.parentElement
      if (target.classList.contains('inactive')) {
        target.classList.remove('inactive')
        target.classList.add('active')
        this.sharedState.mov1.pause()
      }
    },
    inactive (event) {
      var target = event.target.parentElement
      if (target.classList.contains('active')) {
        target.classList.remove('active')
        target.classList.add('inactive')
        this.sharedState.mov1.play()
      }
    }
  },
  destroyed () {
    this.sharedState.mov.play()
  }
}

const help = {
  name: 'help',
  template: ecosystem_template,
  data () {
    return {
      sharedState: store.state,
      ecosystem: store.state.ecosystem[0]
    }
  },
  methods: {
    active (event) {
      var target = event.target.parentElement
      if (target.classList.contains('inactive')) {
        target.classList.remove('inactive')
        target.classList.add('active')
        this.sharedState.mov1.pause()
      }
    },
    inactive (event) {
      var target = event.target.parentElement
      if (target.classList.contains('active')) {
        target.classList.remove('active')
        target.classList.add('inactive')
        this.sharedState.mov1.play()
      }
    }
  },
  destroyed () {
    this.sharedState.mov.play()
  }
}

const home = {
  template: `<z-view class="main">
  <span><strong> Web Development </strong></span>
  
  <section slot="extension">

    <z-spot 
      v-for="(element, index) in ecosystem"
      class="inactive"
      :angle="(360 / ecosystem.length * index) + sharedState.ang * 5"
      :distance="135"
      size="medium"
      :to-view="element.viewName"
      @mouseover.native="active"
      @touchstart.native="active"
      @mouseout.native="inactive"
      @touchend.native="inactive"
      :label="element.name"
      :key="index">

      <i class="fa" :class="element.icon"></i>

      <section slot="extension">

        <z-spot 
          v-for="(subelement, index) in element.elements"
          style="background-color: #26aeed; border: none; "
          :angle="(360 / element.elements.length * index) - sharedState.ang1 * 11"
          :distance="132"
          size="xxs"
          :key="index">
        </z-spot>

      </section>

    </z-spot>

  </section>

</z-view>`,
  data () {
    return {
      sharedState: store.state,
      ecosystem: store.state.ecosystem
    }
  },
  methods: {
    active (event) {
      var target = event.target.parentElement
      if (target.classList.contains('inactive')) {
        target.classList.remove('inactive')
        target.classList.add('active')
        this.sharedState.mov.pause()
      }
    },
    inactive (event) {
      var target = event.target.parentElement
      if (target.classList.contains('active')) {
        target.classList.remove('active')
        target.classList.add('inactive')
        this.sharedState.mov.play()
      }
    }
  },
  updated () {
    var vm = this
    this.$nextTick(function () {
      if (vm.$el.classList.contains('is-previous-view') || vm.$el.classList.contains('is-past-view')) {
        vm.sharedState.mov.pause()
      }
    })
  }
}

new Vue({
  el: '#app',
  components: {
    home,
    help,
    tooling,
    resources,
    core,
    news
  },
  mounted () {
    this.$zircle.setView('home')
  }
})
