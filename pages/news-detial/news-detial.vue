<template>
	<view class="news-detial">
			<h2>{{newsDetial.title}}</h2>
			<view class="info">
				<text>发表时间：{{newsDetial.add_time | formatDate()}}</text>
				<text>浏览：{{newsDetial.click}}</text>
			</view>
			<view class="content">
				<rich-text :nodes="newsDetial.content"></rich-text>
			</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				newsDetial:{}
			}
		},
		onLoad(options) {
			this.getNewsDetial(options.id)
		},
		methods: {
			getNewsDetial(id){
				this.$myRequest({
					url:'/api/getnew/'+id
				}).then(res=>{
					console.log(res.data.message[0])
					this.newsDetial = res.data.message[0]
				})
			}
		}
	}
</script>

<style lang="scss">
	.news-detial{
		font-size: 30rpx;
		padding:0 20rpx 40rpx;
		h2{
			text-align: center;
			margin:20rpx 0;
		}
		.info{
			display: flex;
			justify-content: space-between;
			color:#C0C0C0;
			margin-bottom: 20rpx;
		}
	}
</style>
