<h1>Categories Index</h1>

<div class='categories-wrapper'>
	<a class='category' href='categories/information-technology'>
		<img src='/categories/information-technology.jpg' alt='Information Technology'>
		<span class='title'>
			Information - Technology
		</span>
	</a>
	<a class='category' href='categories/business'>
		<img src='/categories/business.jpg' alt='Business'>
		<span class='title'>
			Business
		</span>
	</a>
	<a class='category' href='categories/marketing'>
		<img src='/categories/marketing.jpg' alt='Marketing'>
		<span class='title'>
			Marketing
		</span>
	</a>
	<a class='category' href='categories/work-life-balance'>
		<img src='/categories/work-life-balance.jpg' alt='Relax'>
		<span class='title'>
			Work life balance
		</span>
	</a>
</div>

<style>
    a.category {
        display: block;
        flex: 1;
        position: relative;
        max-width: 400px;
        margin-right: 20px;
        min-width: 400px;
    }

    .categories-wrapper {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }

    img {
        width: 100%;
    }

    span.title {
        position: absolute;
        bottom: 20px;
        left: 20px;
        font-size: 22px;
        color: white;
        background: rgba(0, 0, 0, 0.5);
        padding: 10px;
        border-radius: 10px;
        box-shadow: 2px 2px 2px black;
    }
</style>
