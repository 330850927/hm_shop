<template>
	<view class="pics">
		<scroll-view class="left" scroll-y>
			<view :class="index === active?'active': ''" v-for="(item, index) in picsCate" :key="item.id"
				@click="leftClickHandle(index, item.id)">
				{{item.title}}
			</view>
		</scroll-view>
		<scroll-view class="right" scroll-y>
			<view class="right_item" v-for="item in picsUrl" :key="item.id">
				<image :src="item.img_url"></image>
				<text>{{item.title}}</text>
			</view>
			<view v-if="res.data.message.length === 0" class="isOver"> 暂无更多数据...</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				picsCate: [],
				active: 0,
				picsUrl: []
			}
		},
		onLoad() {
			this.getPicsCate()
		},
		methods: {
			getPicsCate() {
				this.$myRequest({
					url: '/api/getimgcategory'
				}).then((res) => {
					this.picsCate = res.data.message
					this.leftClickHandle(this.active, this.picsCate[0].id)
				})
			},
			leftClickHandle(active, id) {
				this.active = active
				this.$myRequest({
					url: '/api/getimages/' + id
				}).then(res => {
					console.log(res)
					this.picsUrl = res.data.message
				})
			}
		}
	}
</script>

<style lang="scss">
	page {
		height: 100%;

		.pics {
			height: 100%;
			width: 100%;
			display: flex;
			.left {
				width: 200rpx;
				height: 100%;
				border-right: 1px solid #eee;

				view {
					height: 60px;
					text-align: center;
					line-height: 60px;
					width: 100%;
					color: #333;
					font-size: 30rpx;
					border-top: 1px solid #eee;
				}

				.active {
					background-color: $main-color;
					color: #fff;
				}
			}
			.right{
				height:100%;
				width:530rpx;
				margin:0 auto;
				.right_item{
					background-color: #eee;
					margin:10rpx 0;
					image{
						width:530rpx;
						height:530rpx;
						border-radius: 5px;
						background-color: red;
					}
					text{
						display: block;
						line-height: 60rpx;
						padding: 0 20rpx;
						font-size: 30rpx;
					}
				}
				.isOver{
					width:100%;
					text-align: center;
					font-size: 28rpx;
					color:#ccc;
					height:50px;
					line-height: 50px;
				}
			}
		}
	}
</style>
