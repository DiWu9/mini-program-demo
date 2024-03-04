Component({
  properties: {
    avatar: {
      type: String,
      value: 'https://th.bing.com/th/id/R.e3693e6cc5e44d11d1d7a55e4f05bced?rik=ZA8cULnAuXYO2A&riu=http%3a%2f%2fgetdrawings.com%2fvectors%2f80s-vector-30.jpg&ehk=4bfR0vskLRYw8%2bPsl1nqOkh%2fZx5zRzuTSD25FXPF53c%3d&risl=&pid=ImgRaw&r=0'
    },
    nickname: {
      type: String,
      value: 'username_1'
    },
    address: {
      type: String,
      value: '华中师范大学'
    },
    date: {
      type: String,
      value: '2023年10月26日 13:26'
    },
    content: {
      type: String,
      value: ''
    },
    images: {
      type: Array,
      value: []
    },
    likes: {
      type: Number,
      value: 0
    },
    comments: {
      type: Number,
      value: 0
    },
    shares: {
      type: Number,
      value: 0
    }
  },
  data: {
    // 这里是一些组件内部数据
    someData: {}
  },
  methods: {
    // 这里是一个自定义方法
    customMethod: function () { }
  }
})