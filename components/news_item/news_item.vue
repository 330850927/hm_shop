<template>
	<view>
		<view class="news_item" @click="navigator(item.id)" v-for="item in newsList" :key="item.id">
			<image src="../../static/logo.png"></image>
			<view class="item_right">
				<view class="tit">{{item.title}}</view>
				<view class="info">
					<text>
						发表时间：{{item.add_time | formatDate()}}
					</text>
					<text>浏览：{{item.click}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			newsList: {
				type: Array,
				required: true
			}
		},
		methods:{
			navigator(id){
				this.$emit('itemClick', id)
			}
		}
	}
</script>

<style lang="scss">
	.news_item {
		display: flex;
		padding: 10rpx 20rpx;
		border-bottom: 1px solid #eee;
		padding: 20rpx;

		image {
			min-width: 200rpx;
			max-width: 200rpx;
			height: 140rpx;
			margin-right: 15rpx;
		}

		.item_right {
			display: flex;
			flex-direction: column;
			justify-content: space-between;

			.tit {
				font-size: 34rpx;
			}

			.info {
				font-size: 24rpx;
				color: #ddd;
				display: flex;
				justify-content: space-between;
				// text:nth-child(2){
				// 	margin-left: 30rpx;
				// }
			}
		}
	}
</style>
