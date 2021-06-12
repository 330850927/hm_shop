<template>
	<view class="goods_detial">
		<swiper indicator-dots="true" autoplay="true">
			<swiper-item v-for="(item, index) in swipersList" :key="index">
				<image :src="item.src"></image>
			</swiper-item>
		</swiper>
		<view class="box1">
			<view class="price">
				<text>￥{{infoList.sell_price}}</text>
				<text>￥{{infoList.market_price}}</text>
			</view>
			<view class="goods_name">
				{{infoList.title}}
			</view>
		</view>
		<view class="line"></view>
		<view class="box2">

			<view>
				货号：{{infoList.goods_no}}
			</view>
			<view>
				库存：{{infoList.stock_quantity}}
			</view>
		</view>
		<view class="line"></view>
		<view class="box3">
			<view class="tit">
				详情介绍：{{goodsContent.title}}
			</view>
			<view class="content">
				<rich-text :nodes="goodsContent.content"></rich-text>
			</view>
		</view>
		<!-- #ifdef H5 -->
		<uni-goods-nav :fill="true" :options="options" :buttonGroup="buttonGroup" @click="onClick"
			@buttonClick="buttonClick" />
			<!-- #endif -->
	</view>
</template>

<script>
	// #ifdef H5
	import uniGoodsNav from '@/uni_modules/uni-goods-nav/components/uni-goods-nav/uni-goods-nav.vue'
	// #endif
	export default {
		// #ifdef H5
		components: {
			uniGoodsNav
		},
		// #endif
		data() {
			return {
				id: 0,
				swipersList: [{
						src: '../../static/images/phone/phone1.jpg'
					},
					{
						src: '../../static/images/phone/phone2.jpg'
					},
					{
						src: '../../static/images/phone/phone3.jpg'
					}
				],
				infoList: {},
				goodsContent: {},
				options: [{
					icon: 'headphones',
					text: '客服'
				}, {
					icon: 'shop',
					text: '店铺',
					info: 2,
					infoBackgroundColor: '#007aff',
					infoColor: "red"
				}, {
					icon: 'cart',
					text: '购物车',
					info: 2
				}],
				buttonGroup: [{
						text: '加入购物车',
						backgroundColor: '#ff0000',
						color: '#fff'
					},
					{
						text: '立即购买',
						backgroundColor: '#ffa200',
						color: '#fff'
					}
				]
			}
		},
		onLoad(options) {
			this.id = options.id
			this.getGoodsDetial()
			this.getGoodsInfo()
			this.getGoodsContent()
		},
		methods: {
			getGoodsDetial() {
				this.$myRequest({
					url: '/api/getthumimages/' + this.id
				}).then(res => {
					// console.log(res.data.message)
				})
			},
			getGoodsInfo() {
				this.$myRequest({
					url: '/api/goods/getinfo/' + this.id
				}).then(res => {
					// console.log('2次回调', res)
					this.infoList = res.data.message[0]
				})
			},
			getGoodsContent() {
				this.$myRequest({
					url: '/api/goods/getdesc/' + this.id
				}).then(res => {
					console.log(res)
					this.goodsContent = res.data.message[0]
				})
			},
			onClick(e) {
				uni.showToast({
					title: `点击${e.content.text}`,
					icon: 'none'
				})
			},
			buttonClick(e) {
				console.log(e)
				this.options[2].info++
			}
		}
	}
</script>

<style lang="scss">
	.goods_detial {
		swiper {
			height: 750rpx;

			image {
				width: 100%;
				height: 90%;
			}
		}

		.box1 {
			padding: 10rpx;

			.price {
				font-size: 36rpx;
				color: $main-color;
				line-height: 80rpx;

				text:nth-child(2) {
					color: #ccc;
					font-size: 26rpx;
					text-decoration: line-through;
					margin-left: 20rpx;
				}
			}

			.goods_name {
				font-size: 32rpx;
				line-height: 60rpx;
			}
		}

		.line {
			height: 10rpx;
			width: 750rpx;
			background: #ddd
		}

		.box2 {
			padding: 10rpx;
			font-size: 32rpx;
			line-height: 62rpx;
		}

		.box3 {
			.tit {
				font-size: 32rpx;
				padding-left: 10rpx;
				border-bottom: 1px solid #ddd;
				line-height: 70rpx;
			}

			.content {
				width: 100%;
				padding: 10rpx;
				font-size: 26rpx;
				line-height: 60rpx;
			}
		}

		.uni-goods-nav {
			position: fixed;
			bottom: 0;
			width: 100%;
		}
	}
</style>
