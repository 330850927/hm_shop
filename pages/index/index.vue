<template>
	<view class="home">
		<!-- 轮播图 -->
		<swiper class="swiper-box" indicator-dots autoplay @change="change">
			<swiper-item v-for="(item ,index) in swipers" :key="index">
				<view class="swiper-item">
					<image :src="item.img" :mode="mode"></image>
				</view>
			</swiper-item>
		</swiper>
		<!-- 导航区域 -->
		<view class="nav">
			<view class="nav_item" v-for="(item, index) in navs" :key="index" @click="navItemClick(item.path)">
				<view :class="item.icon"></view>
				<text>{{item.title}}</text>
			</view>
		</view>
		<!-- 推荐商品 -->
		<view class="hot_goods">
			<view class="tit">推荐商品</view>
			<!-- 商品列表 -->
			<goods-list @itemClick="gotoGoodsDetial" :goods-data="goodsData" />
		</view>
	</view>
</template>

<script>
	// 商品列表组件
	import goodsList from "@/components/goods_list/goods_list.vue"
	export default {
		components: {
			goodsList
		},
		data() {
			return {
				swipers: [], // 轮播数据
				current: 0, // 轮播索引
				mode: 'round', // 指示点的类型，可选值：default 、round 、nav 、 indexes
				pageNumber: 1, // 当前页码
				goodsData: [], // 商品数据
				navs: [{
						icon: "iconfont icon-ziyuan",
						title: '黑马超市',
						path: '/pages/goods/goods'
					},
					{
						icon: "iconfont icon-guanyuwomen",
						title: '联系我们',
						path: '/pages/contact/contact'
					},
					{
						icon: "iconfont icon-tupian",
						title: '社区图片',
						path: '/pages/pics/pics'
					},
					{
						icon: "iconfont icon-shipin",
						title: '学习视频',
						path: '/pages/videos/videos'
					}
				],
			}
		},
		onLoad() {
			this.getSwipers()
			this.getHotGoods()
		},
		methods: {
			// 获取轮播图的数据
			getSwipers() {
				console.log('获取了轮播图的数据')
				this.$myRequest({
					url: "/api/getlunbo"
				}).then((res) => {
					console.log('res', res)
					this.$set(this, 'swipers', res.data.message)
				})
			},
			// 轮播图切换
			change(e) {
				this.current = e.detail.current;
			},
			// 导航点击跳转
			navItemClick(url) {
				console.log('跳转', url)
				uni.navigateTo({
					url
				})
			},
			// 获取热门商品列表
			getHotGoods() {
				this.$myRequest({
					url: '/api/getgoods?pageindex=' + this.pageNumber
				}).then((res) => {
					console.log('获取商品列表', res)
					this.goodsData = res.data.message
				})
			},
			// 导航到商品详情
			gotoGoodsDetial(id) {
				uni.navigateTo({
					url: '/pages/goods-detial/goods-detial?id=' + id
				})
			}
		}
	}
</script>

<style lang="scss">
	.home {
		swiper {
			width: 750rpx;
			height: 380rpx;

			image {
				width: 100%;
				height: 380rpx;
			}
		}

		.nav {
			display: flex;

			.nav_item {
				width: 25%;
				text-align: center;

				view {
					width: 120rpx;
					height: 120rpx;
					background-color: $main-color;
					border-radius: 50%;
					margin: 10px auto;
					line-height: 120rpx;
					color: #fff;
					font-size: 50rpx;
				}

				.icon-tupian {
					font-size: 44rpx;
				}

				.icon-shipin {
					font-size: 54rpx;
				}

				text {
					font-size: 30rpx;
					color: #3F536E
				}
			}
		}

		.hot_goods {
			background: #eee;
			overflow: hidden;
			margin: 10px 0;

			.tit {
				height: 50px;
				line-height: 50px;
				color: $main-color;
				text-align: center;
				letter-spacing: 20px;
				background-color: #fff;
				margin: 8rpx 0;
				font-size: 30rpx;
				font-weight: bold;
			}
		}
	}
</style>
