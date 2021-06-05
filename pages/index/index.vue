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
			<vie class="nav_item">
				<view class="iconfont icon-ziyuan"></view>
				<text>黑马超市</text>
			</vie>
			<vie class="nav_item">
				<view class="iconfont icon-guanyuwomen"></view>
				<text>联系我们</text>
			</vie>
			<vie class="nav_item">
				<view class="iconfont icon-tupian"></view>
				<text>社区图片</text>
			</vie>
			<vie class="nav_item">
				<view class="iconfont icon-shipin"></view>
				<text>学习视频</text>
			</vie>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				swipers: [], // 轮播数据
				current: 0, //轮播索引
				mode: 'round' //指示点的类型，可选值：default 、round 、nav 、 indexes
			}
		},
		onLoad() {
			this.getSwipers()
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
				view{
					width:120rpx;
					height:120rpx;
					background-color: #b50e03;
					border-radius: 50%;
					margin: 10px auto;
					line-height: 120rpx;
					color:#fff;
					font-size: 50rpx;
				}
				.icon-tupian{
					font-size: 44rpx;
				}
				.icon-shipin{
					font-size: 54rpx;
				}
				text {
					font-size: 30rpx;
				}
			}
		}
	}
</style>
