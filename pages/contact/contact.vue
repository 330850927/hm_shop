<template>
	<view class="contact">
		<image class="image" src="../../static/images/contact.jpeg"></image>
		<view class="info">
			<view @click="phone">
				联系电话: 400-618-9090 (点击拨打)
			</view>
			<view>
				联系地址: 北京市东城区景山前街4号
			</view>
		</view>
		<map class="map" :latitude="latitude" :longitude="longitude" :markers="covers"></map>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id: 0,
				latitude: 39.909,
				longitude: 116.39742,
				covers: [{
					latitude: 39.909,
					longitude: 116.39742,
					iconPath: ''
				}, {
					latitude: 39.90,
					longitude: 116.39,
					iconPath: ''
				}]
			}
		},
		methods: {
			// 打电话
			phone(){
				uni.makePhoneCall({
					phoneNumber: '400-618-9090',
					success:(res)=>{
						console.log('电话')
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.contact {
		.image {
			width: 750rpx;
			height: 500rpx;
		}

		.info {
			padding: 10rpx 20rpx;

			view {
				line-height: 70rpx;
				padding: 5rpx 0;
				border-bottom: 1px solid #ddd;
			}
			view:nth-child(2){
				border-bottom: 0;
			}
		}

		.map {
			width: 730rpx;
			height: 730rpx;
			margin: 10rpx;
		}
	}
</style>
