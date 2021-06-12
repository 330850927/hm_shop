<template>
	<view class="goods_list">
		<view class="goods_item"  v-for="item in goodsData" :key="item.id" @click="navigator(item.id)">
			<image :src="item.img_url" :alt="item.zhaiyao" :title="item.zhaiyao">
				<view class="price">
					<text>￥{{item.market_price}}</text>
					<text>￥{{item.sell_price}}</text>
				</view>
				<view class="goods_name">
					{{item.title}}
				</view>
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			// 商品列表组件
			goodsData:{
				type: Array,
				default:[],
				required:true
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
	.goods_list{
		padding: 0 15rpx;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		.goods_item{
			background-color: #fff;
			width:355rpx;
			margin:10rpx 0;
			padding:15rpx;
			box-sizing: border-box;
			image{
				width:80%;
				height:150rpx;
				margin:0 auto;
				display: block;
			}
			.price{
				color:$main-color;
				font-size: 30rpx;
				margin-bottom:20rpx 0 10rpx;
				text:nth-child(2){
					color:#ccc;
					font-size: 20rpx;
					margin-left: 17rpx;
					text-decoration: line-through;
				}
			}
			.goods_name{
				font-size: 26rpx;
				line-height: 46rpx;
				padding:10rpx 0 15rpx;
			}
		}
	}
</style>
