import './App.css';

function App() {
  return (
    <div class="content">

	<h1>The Mika's Sweets</h1>

	<address>
		<p>
			<svg viewBox="0 -100 500 512" width="20" title="map-marker-alt">
				<path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" transform="rotate(-20)" />
			</svg>
			123 Main Street &middot; San Francisco, CA
		</p>

		<a href="4125550100">
			<svg viewBox="-200 50 600 600" width="20" title="phone-alt">
				<path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z" transform="rotate(25)" />
			</svg>
			415-123-1234
		</a>
	</address>

	<ul class="boxes">

		<li class="box">
			<h2>Coffee</h2>
			<p class="prices"><span>Small<em>$2</em></span> <span>Large<em>$4</em></span></p>
			<dl>
				<dt>House Blend</dt>
				<dd class="description">
					<p>Smoky, strong, and assertive, just like us.</p>
				</dd>
				<dt>Organic French Roast</dt>
				<dd class="description">
					<p>Smooth and mellow with hints of molasses.</p>
				</dd>
				<dt>Organic Decaf</dt>
				<dd class="description">
					<p>Full bodied and rich, we promise you won't miss the caffiene.</p>
				</dd>
			</dl>
		</li>

		<li class="box">
			<h2>Espresso Drinks</h2>
			<p class="prices"><span>Small<em>$3</em></span> <span>Large<em>$5</em></span></p>
			<dl>
				<dt>Machiatto </dt>
				<dd class="description">
					<p>Espressso and steamed milk, served in a demitasse cup. <span class="note">(Size Small Only)</span></p>
				</dd>
				<dt>Latte</dt>
				<dd class="description">
					<p>Espresso with steamed milk, and sometimes a little art on top. </p>
				</dd>
				<dt>Mocha</dt>
				<dd class="description">
					<p>Espresso with steamed chocolate milk and whipped cream. Also available with white chocolate milk.</p>
				</dd>
				<dt>Americano</dt>
				<dd class="description">
					<p>1 shot espresso, two shots hot water.</p>
				</dd>
			</dl>
		</li>

		<li class="box">
			<h2>Tea</h2>
			<p class="tip">Served to brave people in our notorious antique tea cups.</p>
			<p class="prices"><span>Per Cup<em>$2</em></span> <span class="note"><em>$200</em>if you break the cup</span></p>
			<dl>
				<dt>Earl Grey </dt>
				<dd class="description">
					<p>Black tea fragranced with bergamot.</p>
				</dd>
				<dt>Ginger Hibiscus</dt>
				<dd class="description">
					<p>Floral, tart, and spicy. Caffeine free.</p>
				</dd>
				<dt>Cascade Green</dt>
				<dd class="description">
					<p>A blend of green teas hand selected by our master teamaker.</p>
				</dd>
				<dt>Chamomile</dt>
				<dd class="description">
					<p>Soothing and slightly sweet. Try it with honey! Caffeine free.</p>
				</dd>
			</dl>
		</li>

		<li class="box">
			<h2>From the Bakery</h2>
			<p class="prices"><span>Cookies<em>$2</em></span> <span>Muffins &amp; Pastries<em>$3</em></span></p>
			<dl>
				<dt>Mallory's Famous Snickerdoodles </dt>
				<dd class="description">
					<p>Creamy cinnamony goodness made from scratch with our founder Mallory's prizewinning recipe.</p>
				</dd>
				<dt>Oatmeal Cookie</dt>
				<dd class="description">
					<p>Packed with rolled oats, raisins, and cranberries, these monster cookies are (almost) good for ya!</p>
				</dd>
				<dt>Mixed Berry Muffins</dt>
				<dd class="description">
					<p>Filled with the best berries of the season and topped with a crumb crust. </p>
				</dd>
				<dt>Croissant</dt>
				<dd class="description">
					<p>Our oversized croissants are buttery, flaky, and usually all sold out by 7 a.m.</p>
				</dd>
			</dl>
		</li>

	</ul>

	<table class="hours">
		<thead>
			<tr>
				<th colspan="2">
					<svg width="40" viewBox="0 0 800 800">
						<g>
							<g>
								<g>
									<g>
										<g>
											<path d="M340.261,358.231c17.896,0,33.647-8.998,43.067-22.706h70.971c16.318,0,29.548-13.219,29.548-29.537       c0-16.285-13.229-29.537-29.548-29.537h-70.981c-9.42-13.686-25.172-22.683-43.056-22.683c-0.278,0-0.533,0.089-0.8,0.089       l-64.706-91.065c-9.431-13.252-27.893-16.418-41.189-6.943c-13.297,9.442-16.418,27.871-6.976,41.201l64.761,91.11       c-2.044,5.588-3.333,11.531-3.333,17.84C288.03,334.87,311.402,358.231,340.261,358.231z"></path>
										</g>
									</g>
								</g>
								<g>
									<g>
										<g>
											<path d="M273.034,654.322c-28.337-19.317-57.252-56.363-43.412-125.157h37.102c6.598,0,12.585-3.91,15.24-9.941       c2.622-6.099,1.4-13.119-3.099-17.962l-96.964-104.029c-3.144-3.366-7.531-5.266-12.164-5.266       c-4.599,0-8.986,1.911-12.13,5.266L60.655,501.262c-4.499,4.843-5.721,11.874-3.077,17.962       c2.655,6.031,8.631,9.941,15.196,9.941h34.824c3.021,11.742,40.246,147.407,156.86,151.361       c6.376,0.212,12.13-3.81,14.119-9.875S278.311,657.943,273.034,654.322z"></path>
										</g>
									</g>
								</g>
								<g>
									<g>
										<g>
											<path d="M340.261,0C171.271,0,34.272,136.998,34.272,305.989c0,51.142,12.708,99.252,34.891,141.62l58.33-62.584       c-6.998-18.762-11.675-38.635-13.53-59.33h26.604c10.875,0,19.684-8.798,19.684-19.695c0-10.875-8.809-19.695-19.684-19.695       h-26.527c9.476-109.594,96.942-197.072,206.537-206.547v26.549c0,10.897,8.809,19.695,19.684,19.695       c10.886,0,19.695-8.798,19.695-19.695V79.757c109.584,9.475,197.072,96.953,206.537,206.547h-26.538       c-10.875,0-19.684,8.82-19.684,19.695c0,10.897,8.809,19.695,19.684,19.695h26.538       c-9.465,109.617-96.965,197.072-206.537,206.547v-26.538c0-10.896-8.809-19.694-19.695-19.694       c-10.875,0-19.684,8.798-19.684,19.694v26.427c-3.566-0.355-7.143-0.699-10.664-1.188c-0.044,0.101-0.044,0.211-0.089,0.3       c-7.576,17.263-24.46,28.293-43.1,28.293h-10.32c-0.533,16.529,2.566,30.726,9.109,42.867       c23.96,6.032,48.91,9.586,74.736,9.586c169.002,0,306.012-136.976,306.012-306C646.272,136.998,509.263,0,340.261,0z"></path>
										</g>
									</g>
								</g>
							</g>
						</g>
					</svg>
					Hours
				</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Mon. - Thurs.</td>
				<td>6 a.m. - 9 p.m.</td>
			</tr>
			<tr>
				<td>Fri. - Sat.</td>
				<td>6 a.m. - 11 p.m.</td>
			</tr>
			<tr>
				<td>Sunday</td>
				<td>8 a.m. - 2 p.m.</td>
			</tr>
		</tbody>
	</table>

</div>
  );
}

export default App;
