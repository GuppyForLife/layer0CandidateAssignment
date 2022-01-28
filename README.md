In this assessment I intended on caching images and routes for the product listing page and the product display page for everything in the "New Products" section of the webpage. I did this using Layer0. I also prefetched and deepfetched from routes on the PLP and PDP pages. If I had more time I'd implement more cache data and prefetches for common products and routes that the majority of users would be interested in and that are constant across all users. Layer0 had good documentation and was relatively straighforward to implement. The Layer0 dev tool helped keep things clean while giving you everything necessary to view the impact it makes.

Layer0 Candidate Results

LushUSA
    •	First Byte: 1.215s
    •	Start Render: 2.000s
    •	FCP: 1.920s
    •	Speed Index: 2.102s
    •	LCP: 1.920s
    •	CLS: 0
    •	TBT: > .318s
    •	Total Bytes: 1,218 KB
    •	Visual Page Loading Process: 2.0s
    •	First View:
        o	Run 1: 3.879s
        o	Run 2: 3.930s
        o	Run 3: 3.891s

My Website
    •	First Byte: 0.461s
    •	Start Render: 1.200s
    •	FCP: 1.198s
    •	Speed Index: 1.508s
    •	LCP: 1.233s
    •	CLS: 0
    •	TBT: > .325s
    •	Total Bytes: 1,442 KB
    •	Visual Page Loading Process: 1.2s
    •	First View:
        o	Run 1: 3.199s
        o	Run 2: 3.323s
        o	Run 3: 3.106s

Performance improvements that were made is speed to first byte and especially speed to render. Overall the speeds improved across the board. During the runs the speeds were more than half a second faster. Not only that, my website loaded more data while being faster. Some improvements that could be made are load to first view and the visual page loading process.

