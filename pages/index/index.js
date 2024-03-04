// index.js
const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'

Page({
  data: {
    motto: 'Hello World',
    userInfo: {
      avatarUrl: defaultAvatarUrl,
      nickName: '',
    },
    hasUserInfo: false,
    canIUseGetUserProfile: wx.canIUse('getUserProfile'),
    canIUseNicknameComp: wx.canIUse('input.type.nickname'),

    post: [
      {
        avatar: 'https://th.bing.com/th/id/R.e3693e6cc5e44d11d1d7a55e4f05bced?rik=ZA8cULnAuXYO2A&riu=http%3a%2f%2fgetdrawings.com%2fvectors%2f80s-vector-30.jpg&ehk=4bfR0vskLRYw8%2bPsl1nqOkh%2fZx5zRzuTSD25FXPF53c%3d&risl=&pid=ImgRaw&r=0',
        nickname: 'username_1',
        address: '华中师范大学',
        date: '2023年10月26日 13:26',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
        images: [
          'https://cdn.naturettl.com/wp-content/uploads/2019/08/30182353/how-to-photograph-black-and-white-landscapes-5-800x800.jpg',
          'https://cdn.naturettl.com/wp-content/uploads/2019/09/13140717/ideas-autumn-landscape-photography-9-800x800.jpg',
          'https://avatarfiles.alphacoders.com/104/104379.jpg',
          'https://www.fubiz.net/wp-content/uploads/2013/11/Ocean-Landscapes-Photography-4.jpg',
          'https://www.rxwallpaper.site/wp-content/uploads/beautiful-autumn-landscape-1920x1200-wallpaper-wallpapers-800x800.jpg',
          'https://www.rxwallpaper.site/wp-content/uploads/beautiful-hd-wallpapers-wide-1080p-wallpapersafari-3-800x800.jpg',
          'https://121clicks.com/wp-content/uploads/2020/06/infrared_silence_long_exposure_photography_nathan_wirth_01.jpg',
          'https://www.rxwallpaper.site/wp-content/uploads/40-landscape-wallpaper-800x800.jpg',
          'https://pixel-creation.com/wp-content/uploads/free-fantasy-landscape-wallpaper-widescreen-long-wallpapers-800x800.jpg'
        ],
        likes: 55,
        comments: 10,
        shares: 20,
      },
    ]
  },
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onChooseAvatar(e) {
    const { avatarUrl } = e.detail
    const { nickName } = this.data.userInfo
    this.setData({
      "userInfo.avatarUrl": avatarUrl,
      hasUserInfo: nickName && avatarUrl && avatarUrl !== defaultAvatarUrl,
    })
  },
  onInputChange(e) {
    const nickName = e.detail.value
    const { avatarUrl } = this.data.userInfo
    this.setData({
      "userInfo.nickName": nickName,
      hasUserInfo: nickName && avatarUrl && avatarUrl !== defaultAvatarUrl,
    })
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
})
