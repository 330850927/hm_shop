<template>
	<view class="goods_list">
		<!-- 商品列表 -->
		<goods-list @itemClick="gotoGoodsDetial" :goods-data="goodsData"/>
		<view v-if="flag" class="isOver"> 暂无更多数据...</view>
	</view>
</template>

<script>
	// 商品列表组件
	import goodsList from "@/components/goods_list/goods_list.vue"
	export default {
		components:{
			goodsList
		},
		data() {
			return {
				pageNumber: 1, // 当前页码
				goodsData: [], // 商品数据
				flag: false, // 暂无更多数据
				setTimeoutRefresh: null // 下拉刷新定时器 便于销毁
			}
		},
		onLoad() {
			this.getGoodsList()
		},
		onReachBottom(){
			console.log('触底了')
			if(this.goodsData.length<this.pageNumber*10) return this.flag = true
			this.pageNumber ++
			this.getGoodsList()
		},
		onPullDownRefresh(){
			this.pageNumber = 1
			this.goodsData = []
			this.flag = false
			setTimeout(()=>{
				console.log('111')
				this.getGoodsList(()=>{
					uni.stopPullDownRefresh()
				})
			},1000)
		},
		methods: {
			// 获取热门商品列表
			getGoodsList(callback){
				this.$myRequest({
					url:'/api/getgoods?pageindex=' + this.pageNumber
				}).then((res)=>{
					this.goodsData = [...this.goodsData, ...res.data.message]
					callback && callback()
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
	.goods_list{
		background: #eee;
		overflow: hidden;
		margin: 10px 0 0;
		.isOver{
			text-align: center;
			font-size: 28rpx;
			color:#ccc;
			height:50px;
			line-height: 50px;
		}
	}
</style>
