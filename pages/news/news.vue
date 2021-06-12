<template>
	<view class="news">
		<news-item @itemClick="goDetial" :news-list="newsList"></news-item>
	</view>
</template>

<script>
	import newsItem from "@/components/news_item/news_item.vue"
	export default {
		components: {
			newsItem
		},
		data() {
			return {
				newsList: []
			}
		},
		onLoad() {
			this.getNewsList()
		},
		methods: {
			getNewsList() {
				this.$myRequest({
					url: '/api/getnewslist'
				}).then(res => {
					console.log(res)
					this.newsList = res.data.message
				})
			},
			goDetial(id){
				uni.navigateTo({
					url: '/pages/news-detial/news-detial?id='+id
				})
			}
		}
	}
</script>

<style>
</style>
