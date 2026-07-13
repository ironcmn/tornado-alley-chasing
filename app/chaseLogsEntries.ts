// Chase log entries, scraped from the live tornadoalleychasing.com "Chase Logs"
// archive (chase-logs.html + per-day sub-pages) and ported verbatim. Photos are
// downloaded into /public/images/chase-logs/.
export type ChaseLogEntry = {
  date: string;
  tags: string[];
  text: string[];
  photos: { file: string; caption: string }[];
};

export type ChaseLogYear =
  | { year: string; entries: ChaseLogEntry[]; note?: undefined }
  | { year: string; note: string; entries?: undefined };

export const chaseLogYears: ChaseLogYear[] = [
    {
      year: "2025",
      entries: [
        {
          date: "06/04",
          tags: ["STRUCTURE"],
          text: [
          "This slow moving storm complex over the New Mexico high plains was a simple and delightful way to start the group chase with Josh, Mike, and Dave."
          ],
          photos: [
          { file: "20250604-185737.jpg", caption: "Beautiful storm over the mesas" },
          { file: "img-20250602-153220.jpg", caption: "Me, Mike, Josh, Dave respectively" }
          ],
        },
        {
          date: "06/05",
          tags: ["TORNADOES"],
          text: [
          "A phenomenal chase day in all respects! Josh, Mike, Dave, and I saw 6 tornadoes on this day with the highlight being the Morton, TX mile wide wedge. However, we start with a few smaller, shorter-lived tornadoes including the first one near Causey, NM. This was everybody's first tornado of the trip and for a couple, their first tornado of their lives (though not their last)."
          ],
          photos: [
          { file: "img-20250606-100416.jpg", caption: "Shot from Zach who was parked next to us" },
          { file: "screenshot-20250605-225151-gallery.jpg", caption: "Initial Touchdown!" },
          { file: "img-20250606-100421.jpg", caption: "" },
          { file: "img-20250606-100425.jpg", caption: "Nice tall rope out after being down about 1 minute" },
          { file: "20250605-173624.jpg", caption: "Dirty Morton wedge growing to full size" },
          { file: "20250605-173627.jpg", caption: "Mile wide beast" },
          { file: "screenshot-20250608-064435-gallery.jpg", caption: "Road to Glory" }
          ],
        },
        {
          date: "06/06",
          tags: ["TORNADO"],
          text: [
          "This day started off as a casual and fun build up. Storms started developing slowly before becoming surface-based in western Texas. As we were chasing on the backside of a supercell, we were pleasantly surprised to find a funnel developing on an occluded meso and shortly after we stopped, a very thin rope tornado developed with brief ground circulation near... (checks notes) Ropesville, TX."
          ],
          photos: [
          { file: "20250606-154701.jpg", caption: "Paying homage to The Extreme Bill Paxton" },
          { file: "screenshot-20250606-213416-gallery.jpg", caption: "Tornado Rope out with rainbow " }
          ],
        },
        {
          date: "06/08",
          tags: ["FUNNEL"],
          text: [
          "This day started as we raced to a developing supercell southeast of Amarillo Texas. We got under the base around the time it went tornado warned but we did not see any serious attempt at tornadogenesis. We decided to bail from the storm because of the terrible road network and thick precip core. We drove south to a developing supercell that was rain-free and chaser-free. Seeing that all the chasers stayed on the northern storm, we were given a fantastic show with no one around. After hanging out under the base of the cell for a while and seeing it attempt to develop funnels we watched it head out over open fields and eventually develop a funnel as the meso occluded."
          ],
          photos: [
          
          ],
        },
        {
          date: "06/09",
          tags: ["STRUCTURE"],
          text: [
          "Storms fired near Odessa, TX and tracked southeast toward Garden City, TX. This supercell showed mild rotation with great structure and beautiful blue lighting. Notice the smoke from a local fire being brought up into the updraft."
          ],
          photos: [
          { file: "20250609-202646.jpg", caption: "Double Layered Supercell" },
          { file: "20250609-202727.jpg", caption: "" },
          { file: "20250609-202812.jpg", caption: "" }
          ],
        },
      ],
    },
    { year: "2024", note: "Under Construction." },
    {
      year: "2023",
      entries: [
        {
          date: "06/06",
          tags: ["HAIL"],
          text: [
          "This was a completely unexpected though very fun chase! Matic and I were driving from California to Texas. We stopped at a Starbucks and decided to forecast for the fun of it. We checked radar and a severe storm was only about 30 minutes from us. We did not anticipate any chasing since we were still trying to make it to the high plains. However, this fun, impromptu chase gave us about 2 hours of hail core intercepting."
          ],
          photos: [
          { file: "20230606-125905.jpg", caption: "Storm Base" },
          { file: "20230606-130851.jpg", caption: "Intercepting Hail Core" },
          { file: "20230606-150926.jpg", caption: "Hail Curtain" }
          ],
        },
        {
          date: "06/07",
          tags: ["STRUCTURE"],
          text: [
          "This chase, much like the chase from the previous day, was a surprise. We intended to chase a few mediocre cells the developed in eastern New Mexico. Rain and lightning were the main threats. However, when the storm moved into Texas, it began to take on the storm structure of a bowing segment. As the storm accelerated, the leading edge developed in to the well-structured storm that hit its peak at dusk."
          ],
          photos: [
          { file: "20230607-195811.jpg", caption: "" },
          { file: "20230607-200650.jpg", caption: "" },
          { file: "20230607-202539.jpg", caption: "" },
          { file: "20230607-205723.jpg", caption: "" },
          { file: "20230607-210702.jpg", caption: "" }
          ],
        },
        {
          date: "06/11",
          tags: ["STRUCTURE"],
          text: [
          "Our 1st Colorado chase of the year started off with a bang. We arrived as the storm was strengthening as it came down out of the front range. We had plenty of great lightning, some small hail, and a ground scrapping wallcloud."
          ],
          photos: [
          { file: "20230611-141653.jpg", caption: "" },
          { file: "20230611-142029.jpg", caption: "" },
          { file: "20230611-162201.jpg", caption: "" }
          ],
        },
        {
          date: "06/12",
          tags: ["STRUCTURE"],
          text: [
          "Though we thought this beast was going to plant a tornado soon after it developed, it never quite got the job done. However, it tried to make up for a lack of a danger noodle with some awesome structure. The lightning was surprisingly intense, and we experienced many very close, mortar round strikes. All in all, a very fun and surprisingly intense chase!"
          ],
          photos: [
          { file: "20230612-191052.jpg", caption: "" },
          { file: "20230612-193308.jpg", caption: "" },
          { file: "20230612-195829.jpg", caption: "" },
          { file: "20230612-200009.jpg", caption: "" },
          { file: "20230612-203105.jpg", caption: "" }
          ],
        },
        {
          date: "06/15",
          tags: ["TORNADOES"],
          text: [
          "This day was a highlight of the season. We enjoyed 2 tornadoes on the ground for about 25 minutes near Perryton, Texas. No rain or hail interrupted our photo/video session or our driving intercept. You can find the full intercept video below. You will notice that I stop and reverse half way through the video. That is the point when the smaller tornado on the south side hit us as we were driving to intercept the larger tornado. Fortunately, the tornado was very weak at that point and caused no issue for us."
          ],
          photos: [
          { file: "20230615-172937.jpg", caption: "" },
          { file: "20230615-172125.jpg", caption: "" },
          { file: "20230615-172324.jpg", caption: "" },
          { file: "20230615-172422.jpg", caption: "" }
          ],
        },
        {
          date: "06/16",
          tags: ["TORNADO WARNING"],
          text: [
          "With few road options, this chase involved hours of watching from a distance and hoping for intercepts. We did have some nice structure and a few decent lightning strikes. The real finale occurred when we arrived in Lamar, CO and the storm went tornado warned while we were parked in its path watching it approach. Torrential flooding immediately impacted Lamar as lightning pounded the town and surrounding area."
          ],
          photos: [
          { file: "20230616-195102.jpg", caption: "" },
          { file: "20230616-195137.jpg", caption: "" },
          { file: "20230616-200414.jpg", caption: "" },
          { file: "20230616-184350.jpg", caption: "" }
          ],
        },
        {
          date: "06/17",
          tags: ["STRUCTURE", "FUNNELS"],
          text: [
          "Despite ample opportunities, this storm and had hours to put down a solid tornado. Though we saw many short-lived funnels and rapidly rotating wallclouds, it just couldn't get it done. As the video shows, we were following close behind this beast waiting for it to drop, and though some chasers called in ground circulation, we did not witness any."
          ],
          photos: [
          { file: "20230617-172835.jpg", caption: "" },
          { file: "20230617-181514.jpg", caption: "" },
          { file: "20230617-190656.jpg", caption: "" },
          { file: "20230617-192206.jpg", caption: "" },
          { file: "20230617-195132.jpg", caption: "" },
          { file: "20230617-185701.jpg", caption: "" }
          ],
        },
      ],
    },
    {
      year: "2022",
      entries: [
        {
          date: "06/09",
          tags: ["STRUCTURE"],
          text: [
          "This chase day began with watching towers go up and storms develop near Sutherland, KS. We chased southeast through golf ball size hail until we broke through the leading edge and got visuals on some gorgeous storm structure! The evening was capped off with a spectacular lightning show."
          ],
          photos: [
          { file: "20220609-205220.jpg", caption: "Solid mothership structure" },
          { file: "20220609-210200.jpg", caption: "" },
          { file: "20220609-210223.jpg", caption: "" },
          { file: "20220609-212553.jpg", caption: "Don't be fooled! That's no tornado" },
          { file: "20220609-214501.jpg", caption: "" },
          { file: "20220609-222527.jpg", caption: "The moon shrouded by a new developing storm that would go on to produce a vivid lightning display" }
          ],
        },
        {
          date: "06/11",
          tags: ["STRUCTURE"],
          text: [
          "This was an initially frustrating and challenging chase that involved juggling different targets, second guessing, and racing back to the initial cell. But in the end it worked out, and we made it on the cell when it took on its most spectacular structure. We chased the cell south as it became outflow dominate and broke up the structure. It ended with an awesome mammatus display and epic sunset!"
          ],
          photos: [
          { file: "20220611-182110.jpg", caption: "JAW DROPPING STRUCTURE!" },
          { file: "20220611-181721.jpg", caption: "" },
          { file: "20220611-182517.jpg", caption: "" },
          { file: "20220611-182541.jpg", caption: "" },
          { file: "20220611-183259.jpg", caption: "" },
          { file: "20220611-183935.jpg", caption: "" },
          { file: "20220611-185427.jpg", caption: "" },
          { file: "20220611-201454.jpg", caption: "" },
          { file: "20220611-204835.jpg", caption: "Spectacular mammatus display" },
          { file: "20220611-205857.jpg", caption: "" },
          { file: "20220611-210728.jpg", caption: "Gorgeous sunset" },
          { file: "20220611-210935.jpg", caption: "" },
          { file: "20220611-210942.jpg", caption: "" }
          ],
        },
        {
          date: "06/12",
          tags: ["STRUCTURE"],
          text: [
          "This was more of a severe storm/lightning chase. Boy did it deliver. We drove to the remote NW Nebraska hills and captured some truly awesome landscape lightning shots with a setting sun of course."
          ],
          photos: [
          { file: "img-20220614-133516-108.jpg", caption: "Those colors!" },
          { file: "videocapture-20220613-114640.jpg", caption: "" },
          { file: "videocapture-20220613-115507.jpg", caption: "" },
          { file: "videocapture-20220613-120618.jpg", caption: "" }
          ],
        },
        {
          date: "06/23",
          tags: ["TORNADOES"],
          text: [
          "This chase was by far the highlight of the season! We targeted NW Kansas and got on a burgeoning storm as it began to strengthen and turn supercellular. The structure morphed throughout it's lifecycle and just got better and better. Definitely an all-time structure chase. The storm put down sporadic, short-lived tornadoes throughout its lifecycle. However, the structure was by far the main show."
          ],
          photos: [
          { file: "20220623-165502.jpg", caption: "OMG! THE STRUCTURE! Just wait, it gets better!" },
          { file: "20220623-165516.jpg", caption: "" },
          { file: "20220623-172441.jpg", caption: "" },
          { file: "20220623-182830.jpg", caption: "" },
          { file: "20220623-182936.jpg", caption: "" },
          { file: "20220623-183541.jpg", caption: "" },
          { file: "20220623-184022.jpg", caption: "" },
          { file: "20220623-184817.jpg", caption: "" },
          { file: "img-20220628-063924-750.jpg", caption: "" },
          { file: "screenshot-20220623-205608-gallery.jpg", caption: "" },
          { file: "screenshot-20220623-205845-gallery.jpg", caption: "" }
          ],
        },
        {
          date: "06/24",
          tags: ["STRUCTURE"],
          text: [
          "We returned to Nebraska again for another beautiful structure day. Storms were slow to develop near the Nebraska/Colorado border, but as the strengthened their structure really blossomed and the lightning and wind was intense. We were under the storm while being barraged by lightning and feeling the full impact of 70 mph outflow gusts!"
          ],
          photos: [
          { file: "20220624-202858.jpg", caption: "" },
          { file: "20220624-203610.jpg", caption: "" }
          ],
        },
      ],
    },
    { year: "2021", note: "No chases due to COVID." },
    {
      year: "2020",
      entries: [
        {
          date: "04/22",
          tags: ["TORNADOES"],
          text: [
          "As one of the only chases I had in 2020 because of covid, I'm extremely happy it ended up being a great tornado day. Unfortunately, the tornado came down in an area without roads, but I had a good view of it from a driveway from about as close as I could get. I was chasing near Ardmore, OK and the tornado was down for about 10 minutes. This is the rope out stage."
          ],
          photos: [
          
          ],
        },
      ],
    },
    {
      year: "2019",
      entries: [
        {
          date: "05/24",
          tags: ["SEVERE"],
          text: [
          "We stayed near Lubbock, TX on this day. Fortunately, we did our forecast and it turned out that we were targeting Lubbock. No tornadoes today. But we had some very low wallclouds and some good chasing."
          ],
          photos: [
          { file: "20190524-141246.jpg", caption: "Low Rotating Wallcloud" },
          { file: "20190524-141206.jpg", caption: "Very Low Rotating Wallcloud with Funnel Look Alike" },
          { file: "20190524-092557.jpg", caption: "Sheriff's Target" }
          ],
        },
        {
          date: "05/26",
          tags: ["FUNNEL"],
          text: [
          "We were very close to getting a tornado on this day, but the funnel couldn't quite do it. We chased in Colorado, and the scenery and storms were beautiful. We saw plenty of wallclouds and funnels. A good chase overall."
          ],
          photos: [
          { file: "20190526-152613.jpg", caption: "Ragged Wallcloud" },
          { file: "20190526-164504.jpg", caption: "Sweet Colorado Police Hummer" },
          { file: "20190526-174057.jpg", caption: "Wet RFD" },
          { file: "screenshot-20190526-212457-video-player.jpg", caption: "Funnel Developing Below Wallcloud" }
          ],
        },
        {
          date: "05/27",
          tags: ["SEVERE"],
          text: [
          "We were soooo close to getting torandoes on this day. W were in a perfect position for a couple hours on this tornado warned storm in Colorado. We had a few different rotating wallclouds that we thought might do it, but in the end we left with some spectacular structure."
          ],
          photos: [
          { file: "20190527-174019.jpg", caption: "Storm Developing a Wallcloud As We Get Into Position" },
          { file: "screenshot-20190527-232341-video-player.jpg", caption: "Big Wallcloud Continuing to Form" },
          { file: "20190527-191320.jpg", caption: "" },
          { file: "20190527-192653.jpg", caption: "Very Nice Bell-Shaped Updraft" },
          { file: "20190527-193706.jpg", caption: "Dejan and Matic Getting Back to the 4Runner So We Can Blast North" },
          { file: "20190527-194259.jpg", caption: "New Wallcloud Forming On Second Storm" }
          ],
        },
        {
          date: "05/28",
          tags: ["TORANDOES"],
          text: [
          "May 28th was a spectacular day of tornadoes in Kansas! We had a tornado form right next to us in Waldo, KS. and change shape for about 15 minutes. At 2 different times, we had 2 tornadoes on the ground at once. We also saw the rope out of the Tipton tornado that formed shortly after the Waldo tornado. An all around excellent chase day and the thing that keeps us coming back for more!",
          "Video #1"
          ],
          photos: [
          { file: "screenshot-20190528-225629-video-player.jpg", caption: "Waldo Tornado Developing Over the Road" },
          { file: "screenshot-20190528-225720-video-player.jpg", caption: "Waldo Tornado Developing Behind Us" },
          { file: "img-20190529-072236-248.jpg", caption: "Large Cone Tornado Moving Through The Trees" },
          { file: "screenshot-20190528-222112-video-player.jpg", caption: "Wedge Tornado Just Behind The Trees" },
          { file: "screenshot-20190528-222207-video-player.jpg", caption: "Fat Cone Tornado In The Field" },
          { file: "screenshot-20190529-201241-video-player.jpg", caption: "Beautiful White Tornado" },
          { file: "screenshot-20190528-222417-video-player.jpg", caption: "White Tornado With RFD Clear Slot" },
          { file: "screenshot-20190529-201726-video-player.jpg", caption: "Mile High Rope Out" },
          { file: "received-2030845580348589.jpeg", caption: "Tornado Alley Stormtroopers Post-Chase Picture" }
          ],
        },
        {
          date: "05/31",
          tags: ["TORNADOES"],
          text: [
          "We scored a few dirty tornadoes on this day in Texas. One lasted a few minutes but most only lasted 20 or 30 seconds. Low lever shear was rather weak, so we weren't expecting much. However, the area around Fort Stockton, TX is pretty notorious for its storms and tornadoes that develop off the Davis Mountains. Fort Stockton delivered for us and gave us a really fun chase!"
          ],
          photos: [
          { file: "screenshot-20190531-221537-video-player.jpg", caption: "Dirty Tornado" },
          { file: "screenshot-20190531-221658-video-player.jpg", caption: "Another Dirty Tornado with Funnel Above" },
          { file: "screenshot-20190531-221448-video-player.jpg", caption: "Another Small Spin-up" },
          { file: "screenshot-20190531-221952-video-player.jpg", caption: "Some Lightning On A Cell at Sunset" }
          ],
        },
        {
          date: "06/01",
          tags: ["SEVERE"],
          text: [
          "Fort Stockton, Texas has been a pretty consistent area for severe weather and tornadoes. We were able to test our luck with Fort Stockton on a few occasions. We didn't see tornadoes there on this day, but we did have a fun chase with hail, lightning, and structure."
          ],
          photos: [
          { file: "20190601-185717.jpg", caption: "Tornado Warned Storm Over Fort Stockton, TX." },
          { file: "20190601-185736.jpg", caption: "Derin Assessing the Situation" },
          { file: "20190601-192449.jpg", caption: "POV of Matic's Documenting" },
          { file: "20190601-200011.jpg", caption: "Spiky Hail" },
          { file: "screenshot-20190601-214046-video-player.jpg", caption: "Golf Balls" }
          ],
        },
        {
          date: "06/03",
          tags: ["SEVERE"],
          text: [
          "So, we weren't even planning on chasing this day. The parameters looked incredibly marginal, and we didn't have much faith in the setup. But, on our way to White Sands National Monument, the structure of this cell caught our interest. When it went tornado warned about 30 minutes later, we were hooked for the rest of the day. It goes to show that even on the most marginal days in the high plains amazing things can happen. I don't think any other year has reinforced that idea more than this year."
          ],
          photos: [
          { file: "20190603-142149.jpg", caption: "Lovely New Mexico Structure" },
          { file: "20190603-163506.jpg", caption: "" },
          { file: "20190603-164554.jpg", caption: "Motherships Over Rosewell" },
          { file: "20190603-180655.jpg", caption: "Meaty Wallcloud South Of Rosewell, NM." }
          ],
        },
        {
          date: "06/04",
          tags: ["FUNNELS"],
          text: [
          "After canceling our trip to White Sands the day before because storms were so good near Rosewell, NM, we decided to take another shot at it on this day. It's a good thing we did too, because we saw a mid-level funnel on a tiny LP cell within about 20 minutes of being at the park. We spent a couple hours racing up a down the dunes and exploring the area before some severe storms moved in and created a haboob (sand storm). It was a very rewarding \"day off!\""
          ],
          photos: [
          { file: "20190604-141125.jpg", caption: "Tiny Updraft That Produced A Mid-Level Funnel" },
          { file: "screenshot-20190605-062027-video-player.jpg", caption: "Pretty Serious Mid-Level Funnel Spotted By Derin" },
          { file: "screenshot-20190605-062015-video-player.jpg", caption: "" },
          { file: "20190604-145357.jpg", caption: "Dune Racing" },
          { file: "screenshot-20190604-154239-video-player.jpg", caption: "Lightning Strike In The Desert" }
          ],
        },
        {
          date: "06/07",
          tags: ["FUNNEL"],
          text: [
          "This was another day that turned out to far exceed our expectations despite the marginal storm parameters. We weren't expecting much, but we had a very fun chase for a few hours (Colorado magic has been known to do that). We were all surprised to see a persistent rotating wallcloud and funnel on the cell we were chasing. Colorado delivered for us again!"
          ],
          photos: [
          { file: "screenshot-20190607-165208-video-player.jpg", caption: "Nice Base Developing" },
          { file: "20190607-182920.jpg", caption: "Rotating Wallcloud" },
          { file: "screenshot-20190608-075339-video-player.jpg", caption: "Funnel Rotating For A Few Minutes" },
          { file: "20190607-200831.jpg", caption: "Sunset Structure" },
          { file: "20190622-141754.jpg", caption: "Close Strike" }
          ],
        },
        {
          date: "06/08",
          tags: ["TORNADOES"],
          text: [
          "Well, this day in Colorado and Kansas turned out to be one of the best of the trip. We were eating at the Dish Room in Burlington, CO when storms fired right over town. Talk about a convenient target! However, we did not expect a tornado to form while we were having lunch! We ran outside to watch it develop. Apparently, it touched down in a field just outside of town. But, that made for a great start because we then saw 3 landspout tornadoes form north of town. They were on the ground for about 20 minutes and we raced to get close but they were still a few miles away from us when they dissipated. Little did we know that the main show hadn't started yet. Storms near Goodland, KS strengthened and eventually got tornado warned. We were treated to some of the most spectacular structure of the year! Not only did we get the structure, but we had a dirty tornado develop from this amazing mesocyclone."
          ],
          photos: [
          { file: "screenshot-20190608-141250-video-player.jpg", caption: "Tornado At Lunch" },
          { file: "img-20190609-214556-298.jpg", caption: "Landspout Tornado north of Burlington, CO" },
          { file: "20190608-201124.jpg", caption: "The Crew Enjoying The View " },
          { file: "20190608-203009.jpg", caption: "Structure Improving" },
          { file: "20190608-205407.jpg", caption: "So Many Layers" },
          { file: "20190608-210155.jpg", caption: "Tornado And Structure" },
          { file: "20190608-210334.jpg", caption: "Tornado and Structure" },
          { file: "20190608-205935.jpg", caption: "" }
          ],
        },
        {
          date: "06/13",
          tags: ["SEVERE"],
          text: [
          "After a few down days spent in Rocky Mountain National Park and Pikes Peak, we were chasing again and this time in New Mexico. We bounced around to quite a few weak and struggling storms until we finally found one that was getting its act together. We had some very nice structure and copious amounts of lightning until sunset."
          ],
          photos: [
          { file: "20190613-204658.jpg", caption: "" },
          { file: "20190613-205419.jpg", caption: "" }
          ],
        },
        {
          date: "06/17",
          tags: ["TORNADO"],
          text: [
          "We finally bagged a tornado in Campo, CO! The day started out with messy storm modes all over Colorado and New Mexico. Fortunately, we stayed near our target area until 7 pm (which usually is magic hour with storms), and a cell to our west developed a lowering and strengthened rapidly. We drove slowly toward the lowering due to extremely slick, muddy roads. The ground scraping wallcloud developed a short-lived cone tornado before becoming a very beautiful bowing segment."
          ],
          photos: [
          { file: "received-2154604687971385.jpeg", caption: "Beautiful Structure" },
          { file: "20190617-184230.jpg", caption: "" },
          { file: "user-scoped-temp-data-media-upload2-1560863312072.jpg", caption: "" },
          { file: "user-scoped-temp-data-media-upload1-1560863304965.jpg", caption: "Super Low Wallcloud Just Before Tornado" },
          { file: "user-scoped-temp-data-media-upload2-1560863307432.jpg", caption: "Rotating Lowering Shortly Before Tornado" }
          ],
        },
        {
          date: "06/18",
          tags: ["TORNADO"],
          text: [
          "The only tornado of the day happened rather early just north of Dodge City, Kansas. We saw a few weak cells to our north and stopped for lunch to see which direction we should go. Shortly afterward the storms to our north strengthened and began to ingested an outflow boundary. Soo they got severe warned. We raced north to intercept it, but we were still about 10 miles away when the tornado started. As we closed in, the tornado dissipated, but the beefy wallcloud remained for another 20 minutes."
          ],
          photos: [
          { file: "screenshot-20190618-185428-video-player.jpg", caption: "Distant Tornado On The Ground For 5 To 10 Minutes" },
          { file: "screenshot-20190618-185413-video-player.jpg", caption: "Another Shot Of The Distant Tornado" },
          { file: "20190618-145919.jpg", caption: "Meaty Wallcloud After Tornado Lifted" }
          ],
        },
        {
          date: "06/19",
          tags: ["TORNADO"],
          text: [
          "Our last chase day brought us to north central Texas. We targeted just northeast of Dallas and storms fired shortly after we arrived. We waited for a storm to become dominate and we showed up next to it right when it began to rotate. We were very close to the initial rotation, so we decided to move back a bit. We readjusted to the perfect spot right in front of the rotation. Unfortunately, a tornado didn't drop down when the rotating wallcloud was right in front of us. Instead, the RFD began to accelerate and the storm began diving to the southeast. We tried to get through Greensville, TX to get a view back on the storm, but traffic slowed us down and we got trapped in some RFD. It was a very intense time because a tornado could have developed behind us at anytime. Both Alex and I saw developing funnels, but fortunately it wasn't until after we made it through Greensville that we looked back and saw a tornado in the rain curtains. This day was by far our most stressful day because we were almost trapped in the hook in heavy traffic. NOT GOOD! In the end, it all worked out well, and it was a very memorable chase day."
          ],
          photos: [
          { file: "screenshot-20190620-220122-video-player.jpg", caption: "Developing Wallcloud And Funnel" },
          { file: "screenshot-20190619-235205-video-player.jpg", caption: "Tornado 2 Miles To Our North" },
          { file: "20190620-003027.jpg", caption: "Tornado Circled" },
          { file: "20190619-175516.jpg", caption: "Rain Wrapping RFD" }
          ],
        },
      ],
    },
    {
      year: "2018",
      entries: [
        {
          date: "03/25",
          tags: ["SEVERE"],
          text: [
          "This turned out to be a really fun chase with Alex while he was in town over the weekend. We drove to Wichita Falls, TX to await storm initiation along the dryline. A cluster of updrafts developed and moved northeast. As the cells merged a dominate supercell developed and massive RFD cleared out the updraft. A wall cloud developed and rotated intermittently. We chased for about 3 hours through the paved and gravel roads in rural Texas. Even with a rotating mesocyclone, no fully developed funnels or tornadoes formed. However, we did note a few instances of funnel formation. Some beautiful structure at sunset capped off a good first chase of the season."
          ],
          photos: [
          { file: "david-01-full_1.jpg", caption: "Massive RFD " },
          { file: "3s7a8519-edit.jpg", caption: "Wall cloud developing" },
          { file: "david-02-full.jpg", caption: "Stormtroopers" },
          { file: "3s7a8525-edit.jpg", caption: "Getting under that wall cloud" },
          { file: "20180325-182836.jpg", caption: "" },
          { file: "20180325-193044.jpg", caption: "Getting LOW" },
          { file: "20180325-200942.jpg", caption: "Beautiful Structure" }
          ],
        },
        {
          date: "05/23",
          tags: ["SEVERE"],
          text: [
          "This was the first good chase that Derin, Dejan, Matic, and I had together. We approached the storm from the north near the Black Hills in South Dakota. The storm became severe warned right when we got in front of it. A large wallcloud showed itself as it crossed over a hill. Then we chased some nice structure through the rolling hills of SD."
          ],
          photos: [
          { file: "20180523-181807.jpg", caption: "" },
          { file: "20180523-185004.jpg", caption: "Brutal Hail Core" },
          { file: "20180523-190743.jpg", caption: "" },
          { file: "20180523-190954.jpg", caption: "" },
          { file: "20180523-192428.jpg", caption: "" },
          { file: "20180524-110100.jpg", caption: "Next Day We Chatted with Reed Timmer and the DOM Crew" }
          ],
        },
        {
          date: "05/25",
          tags: ["SEVERE"],
          text: [
          "We had a surprise chase in western Oklahoma on the 25th. We woke up and realized that we needed to rush to the OK/TX border. On the way, we stopped by the El Reno memorial to honor our fallen brothers. Then we made our way to western OK to watch our LP cell develop. It was fun to watch the storm form because Derin had not experienced that part of chasing yet. And, we had a nice little chase with small hail and some shear funnels."
          ],
          photos: [
          { file: "20180525-142847.jpg", caption: "" },
          { file: "20180525-182425.jpg", caption: "" },
          { file: "20180525-183254.jpg", caption: "" }
          ],
        },
        {
          date: "05/27",
          tags: ["TORNADOES"],
          text: [
          "This turned out to be Derin, Dejan, and Matic's best day for tornadoes. We drove through Colorado to get to Cheyenne Wyoming. Unfortunately, we were out of position for the first 2 tornadoes. We came over the Laramie range instead of up through Cheyenne. We saw 4 tornadoes, but the perpetual rain wrapping and poor contrast didn't give us great photos. We saw a small cone over the Laramie range, an elephant trunk from a distance on the front range, a cone that quickly got rain wrapped, and an obscured wedge. All in all it was a good day."
          ],
          photos: [
          { file: "20180527-152044.jpg", caption: "" },
          { file: "20180527-153230.jpg", caption: "Distant Elephant Trunk Down for about 5 Minutes" },
          { file: "screenshot-20180527-191119-video-player.jpg", caption: "Cone Tornado That Quickly Became Rain Wrapped" },
          { file: "20180527-210538.jpg", caption: "The Birth of \"Sheriff Says\" Facebook Posts" },
          { file: "20180527-155256.jpg", caption: "Derin Sheriff" },
          { file: "20180527-155310.jpg", caption: "Dejan Sheriff" },
          { file: "20180527-155325.jpg", caption: "Matic Sheriff" },
          { file: "20180527-163840.jpg", caption: "Wrapping Wedge" },
          { file: "screenshot-20180527-213957-video-player.jpg", caption: "Obscured Tornado" }
          ],
        },
        {
          date: "05/28",
          tags: ["SEVERE"],
          text: [
          "Today turned out to be a big disappointment. We took a gamble on chasing the Palmer Divide in Colorado when we should have taken the bait on the more obvious target near Akron, CO. We were left with a fun chase, but we missed out on the landspout fest that everyone enjoyed. Most people saw about 10 landspouts and we got hail, structure, and a brief rotating wall cloud."
          ],
          photos: [
          { file: "20180528-144432.jpg", caption: "" },
          { file: "20180528-144834.jpg", caption: "Shear Funnel" },
          { file: "20180528-161737.jpg", caption: "Lots-o-hail" },
          { file: "20180528-163631.jpg", caption: "Rotating Wall Cloud" },
          { file: "20180528-201050.jpg", caption: "" },
          { file: "20180528-201310.jpg", caption: "" }
          ],
        },
        {
          date: "05/29",
          tags: ["TORNADO"],
          text: [
          "Had a difficult chase on this HP beast in northwestern Oklahoma. The chase started off well. Dejan, Matic, Derin, and I approached a developing supercell from the south. Shortly after getting into position near the developing wallcloud, the vorticity really cranked up and a funnel began to develop. We were nearly under it for a few minutes until it occluded and a new wallcloud developed to the east. A series of occlusions and major rain wrapping forced us to stay back and bail south in order to get back in front of the cell on the opposite side of the river. We positioned ourselves in the vault area for the remainder of the chase and scored and needle-thin, short-lived tornado. Nothing special, although it was nice to capture it since our hopes were high for this day to deliver but it fell short of expectations."
          ],
          photos: [
          { file: "20180529-161812.jpg", caption: "Lowering with Lots of Spin" },
          { file: "20180529-163052.jpg", caption: "" },
          { file: "20180529-182346.jpg", caption: "HP Mode Engaged" },
          { file: "20180529-193212.jpg", caption: "Needle Tornado" },
          { file: "20180529-193549.jpg", caption: "HPing Like Crazy" }
          ],
        },
        {
          date: "05/30",
          tags: ["SEVERE"],
          text: [
          "Had to drive to New Mexico to start our chase. Had a few cells develop near the NM/TX border. The cells were slow to start, and when we saw a southern cell develop, we went for it. Our hopes of it being the dominant tail-end Charlie were dashed when it quickly shriveled up and died. We then played a long game of catch up to the primary cell that was now much farther east of us. Our tenacity paid off because we were treated to some beautiful structure."
          ],
          photos: [
          { file: "20180530-153302.jpg", caption: "" },
          { file: "20180530-160646.jpg", caption: "" },
          { file: "20180530-194053.jpg", caption: "" },
          { file: "20180530-200840.jpg", caption: "" },
          { file: "20180530-202748.jpg", caption: "" },
          { file: "20180530-202814.jpg", caption: "" },
          { file: "20180530-210750.jpg", caption: "" }
          ],
        },
        {
          date: "06/03",
          tags: ["SEVERE"],
          text: [
          "This was Akos and Mark's first chase with Derin and I. Matic and Dejan had to go home. Therefore, group 2 was just getting started. We targeted some isolated and nearly stationary supercells near El Paso, TX. We were treated to a variety of mothership style supercell structures and we hardly needed to drive at all in the three hours we watched them. It was a good first day with Akos and Mark."
          ],
          photos: [
          { file: "20180603-181647.jpg", caption: "" },
          { file: "20180603-180035-2.jpg", caption: "" },
          { file: "20180603-190256.jpg", caption: "" },
          { file: "20180603-190149-2.jpg", caption: "" },
          { file: "20180603-191758-2.jpg", caption: "" },
          { file: "20180603-180448-2.jpg", caption: "" }
          ],
        },
        {
          date: "06/06",
          tags: ["SEVERE"],
          text: [
          "Today turned out to be an incredibly disappointing day. We missed out on the Laramie tornado in WY. We saw some pretty structure and got some hail, but the real action was in WY. I've included a couple pictures of the Laramie tornado form the two chasers that were there."
          ],
          photos: [
          { file: "20180606-184428.jpg", caption: "Our Structure" },
          { file: "20180606-184528.jpg", caption: "" },
          { file: "screenshot-20180607-111006-twitter.jpg", caption: "Laramie Tornado Captured by James Hammett" },
          { file: "screenshot-20180607-110720-twitter.jpg", caption: "Laramie Tornado Captured by Owen Willoughby" }
          ],
        },
        {
          date: "06/08",
          tags: ["SEVERE"],
          text: [
          "This was a nice chase day. Akos, Mark, and I chased in the Black Hills of South Dakota. We had a slow moving supercell move over the Hills, and we were treated to pleasant structure and golf ball size hail. Later in the evening when we thought the chasing was over, we had a short-lived but quite good-looking severe storm pass right next to the Rapid City, SD where we were staying."
          ],
          photos: [
          { file: "20180608-144814.jpg", caption: "Pirate Ship Supercell Over the Black Hills" },
          { file: "20180608-150636.jpg", caption: "Chris the Swede" },
          { file: "20180608-160100.jpg", caption: "" },
          { file: "20180608-204823.jpg", caption: "Surprise Supercell" },
          { file: "20180608-204856.jpg", caption: "Pretty Cool" }
          ],
        },
        {
          date: "06/10",
          tags: ["SEVERE"],
          text: [
          "I could rename this day as \"Took a Wrong Turn\" day because we went way out of our way for no particular reason. Sometimes in the heat of battle you make decisions and you aren't thinking particularly clearly. You aren't asking yourself the right questions. Well, that was this day. I nailed the forecast on this day for Castle Rock, SD. I beastly cell went up, and we were right on it when it started to turn and get tornado warned. We were almost directly under the area of rotation when it crossed the road, and we decided to move north and east to get ahead of it. Well, the north road had no east options for about 10 or 15 miles. So, by the time we turned east we were extremely far north of the meso. I'm not entirely sure why we didn't drive south and take an east road that went directly south of the storm, but we didn't. Fortunately, it was 2018 and no tornadoes developed but the day did end with one of the largest and most vertical whale's mouths I have ever seen."
          ],
          photos: [
          { file: "20180610-161842.jpg", caption: "Explosive Tower Going Up Over Castle Rock, SD" },
          { file: "20180610-164540.jpg", caption: "Watching the Rotating Meso Approach" },
          { file: "20180610-181202.jpg", caption: "" },
          { file: "20180610-183706.jpg", caption: "" },
          { file: "20180610-192639.jpg", caption: "" },
          { file: "20180610-195649-2.jpg", caption: "Nearly Vertical Whale's Mouth!" },
          { file: "20180610-200035.jpg", caption: "" },
          { file: "20180610-200411.jpg", caption: "" },
          { file: "screenshot-20180624-172718-video-player_1.jpg", caption: "" }
          ],
        },
        {
          date: "06/11",
          tags: ["SEVERE"],
          text: [
          "This day turned out to be a bit of a mess. Akos, Mark, and I were late arriving to Omaha, Nebraska because the target area shifted so far south. Therefore, we missed the one good tornado of the day. It was short-lived, but it was a nice cone with a great meso and it wasn't moving very fast. Our consolation prize was a nice shelf cloud and some decent lightning."
          ],
          photos: [
          { file: "20180611-180155.jpg", caption: "" },
          { file: "20180611-180539.jpg", caption: "" },
          { file: "screenshot-20180611-224615-video-player.jpg", caption: "" }
          ],
        },
        {
          date: "06/14",
          tags: ["TORNADO"],
          text: [
          "We saw a tornado in Canada! This day was pretty cool because it was our first chase in Canada and we got lucky and saw a brief cone tornado! The forecast looked apocalyptic, but it's 2018, so the tornado outbreak just turned out to be a supercell outbreak with large hail. We chose a beastly cell that was riding the US/Canada border. We stayed on the Canada side and were able to position ourselves in the inflow notch long enough to get a short-lived tornado and the only tornado of the day. It was a difficult chase, though. The storm was moving about 50 mph, so we were forced to drive as fast as possible on dirt/gravel roads in order to stop and take pictures for about 2 minutes before having to jump in the Stormtrooper to blast east again."
          ],
          photos: [
          { file: "20180613-191744.jpg", caption: "" },
          { file: "20180614-141322.jpg", caption: "" },
          { file: "20180614-154536.jpg", caption: "" },
          { file: "20180614-154930.jpg", caption: "" },
          { file: "20180614-184810.jpg", caption: "" },
          { file: "screenshot-20180615-122015-twitter.jpg", caption: "" },
          { file: "20180616-145405.jpg", caption: "" }
          ],
        },
        {
          date: "06/16",
          tags: ["SEVERE"],
          text: [
          "Akos, Mark, and I took a gamble on this day and it paid off. The SPC had a 10% tornado outlook for northeastern South Dakota into western Minnesota. After our forecast and checking and re-checking models, satellite, and surface obs, we decided to target central to east central South Dakota. We chose wisely. Storms fired close to our position, and we were on them around the time they were severe warned. The storm eventually got a tornado warning, but it never produced. That's nothing out of the ordinary though. That probably happened more than 2 dozen times to me this year alone. This storm certainly had some nice structure for quite a while."
          ],
          photos: [
          { file: "20180616-185544.jpg", caption: "" },
          { file: "20180616-190706.jpg", caption: "" },
          { file: "20180616-191936.jpg", caption: "" },
          { file: "20180616-193522.jpg", caption: "" },
          { file: "20180616-195314.jpg", caption: "" },
          { file: "20180616-202055.jpg", caption: "" },
          { file: "20180616-202443.jpg", caption: "" },
          { file: "20180616-202820.jpg", caption: "" }
          ],
        },
        {
          date: "06/18",
          tags: ["SEVERE"],
          text: [
          "Again, Akos, Mark, and I had some nice structure and a couple tornado warned storms, but nothing produced. We were chasing along the front range of Colorado just north of Denver. We watched some slow moving, nicely sculpted supercells for a few hours before the environment became too heavily congested with storms."
          ],
          photos: [
          { file: "20180618-191636.jpg", caption: "" },
          { file: "20180618-191903.jpg", caption: "" },
          { file: "20180618-193007.jpg", caption: "" },
          { file: "20180618-193029.jpg", caption: "" },
          { file: "20180618-195427.jpg", caption: "" },
          { file: "20180618-200820.jpg", caption: "" }
          ],
        },
        {
          date: "06/19",
          tags: ["TORNADO"],
          text: [
          "This was by far the best day of the 2018 season for me! We chased the front range of Colorado. Akos, Mark, and I watched 3 supercells develop off the range and push east over Denver and the surrounding area. We perched up on a hill and watched the three cells evolve and develop over an hour. It was pretty cool to be surrounded by supercells and have an eye on all of their bases at once. We moved east with them as the pushed out of Denver, and the middle cell got a tornado warning; although, we didn't initially jump on it. We could see all the bases, and we weren't too impressed with the middle one... yet. Eventually, an outflow boundary moved through and undercut the tornado warned cell. However, we noticed that it quickly recovered and began pulling in the boundary. By this point we were sold. We headed straight for it, and a few minutes after we arrived it put down a beautiful, though only 5 minute-long tornado.",
          "VIDEO #1"
          ],
          photos: [
          { file: "20180619-130235.jpg", caption: "All 3 Severe Warned Supercells" },
          { file: "20180619-135539.jpg", caption: "The Turning Meso Ready to Drop a Tornado" },
          { file: "screenshot-20180619-190907-video-player.jpg", caption: "Nice!" },
          { file: "screenshot-20180619-215431-gallery.jpg", caption: "CLOSER!" },
          { file: "screenshot-20180619-215459-gallery-2.jpg", caption: "" },
          { file: "screenshot-20180619-191939-video-player.jpg", caption: "CLOSER!" },
          { file: "tac-cover-final-2.jpg", caption: "That's More Like It" }
          ],
        },
      ],
    },
    {
      year: "2017",
      entries: [
        {
          date: "03/26",
          tags: ["SEVERE", "FUNNELS"],
          text: [
          "I targeted Comanche, OK. Shortly after I arrived the first cell went up right next to me. I chased the cell until it produced a funnel over the Canadian River. Then I dropped south to Ada, OK, and arrived just in time to see the horizontal funnel/tornado dissipating. I drove by some golf ball to baseball size hail and stopped to take a look. Overall a good chase.",
          "Video #1"
          ],
          photos: [
          { file: "kfdr-20170326-160001.png", caption: "Cell Firing Near Me" },
          { file: "20170326-183712.jpg", caption: "Funnel Over Canadian River" },
          { file: "20170326-173046.jpg", caption: "Scud Lowering" },
          { file: "20170326-193302.jpg", caption: "Hail" },
          { file: "ktlx-20170326-181110.png", caption: "Hook Slice" }
          ],
        },
        {
          date: "03/29",
          tags: ["SEVERE"],
          text: [
          "A pretty underwhelming day for the hype surrounding it. I first went to Joplin and didn't get anything, so I headed back into OK for a severe storm that was going sub-severe and dying by the time I got on it. However, it did have pretty structure for a low-topped, high based LP cell."
          ],
          photos: [
          { file: "20170329-183132.jpg", caption: "Marginally Severe with Good Structure" },
          { file: "20170329-183138.jpg", caption: "Dying but Super LP" },
          { file: "20170329-184013.jpg", caption: "Nice Little Mothership-like Structure" },
          { file: "20170329-184030.jpg", caption: "Pretty" }
          ],
        },
        {
          date: "04/04",
          tags: ["SEVERE"],
          text: [
          "We had very fast moving storms near the Tulsa area on this day. I could only keep up with the main storm for about an hour before it pulled away and eventually produced a tornado in Missouri. I got a nice wall cloud and some hail for my efforts ,though."
          ],
          photos: [
          { file: "20170404-163140.jpg", caption: "Cool Structure" },
          { file: "20170404-171203.jpg", caption: "Large Wallcloud" }
          ],
        },
        {
          date: "04/15",
          tags: ["SEVERE", "FUNNEL"],
          text: [
          "A fun chase once things got going at 7pm. A series of wallclouds kept developing on this tornado-warned storm, but it couldn't quite drop a tornado. Good structure and a small funnel made it a nice chase.",
          "Video #1"
          ],
          photos: [
          { file: "20170415-185319.jpg", caption: "Storm Starting to get Serious" },
          { file: "20170415-185646.jpg", caption: "" },
          { file: "20170415-191400.jpg", caption: "Small Wallcloud Forming" },
          { file: "kvnx-20170415-200809.png", caption: "My Position in Yellow. Red Box Indicates a Tornado Warning." },
          { file: "20170415-191844.jpg", caption: "Wallcloud Trying to Rotate" },
          { file: "20170415-192338.jpg", caption: "RFD Clear Slot Really Digging In" },
          { file: "20170415-201602.jpg", caption: "Sunset Skies" },
          { file: "20170415-202214.jpg", caption: "Storm Dying" }
          ],
        },
        {
          date: "05/16",
          tags: ["TORNADO"],
          text: [
          "I targeted SW OK on this day because I had to work and I was late getting to the action. I found a great spot to watch a tornado-warned storm move in from the west. As it approached, the rotation began to increase and an uncondensed tornado developed. It quickly began wrapping in rain as it grew into a wedge. I chased it for a few hours getting glimpses of the tornado that impacted Elk City and funnels associated with its northeast progress.",
          "Video #1"
          ],
          photos: [
          { file: "20170517-124219.jpg", caption: "The beginning of the Elk City tornado" },
          { file: "kfdr-20170516-185558.png", caption: "" }
          ],
        },
        {
          date: "05/19",
          tags: ["SEVERE"],
          text: [
          "This was my first day out with Alex, Dejan, and Matic. We targeted a weak triple point in Throckmorton, TX and got a weak shelf cloud for our efforts. Mostly, it was a long drive to get into position for the next day."
          ],
          photos: [
          { file: "20170519-203627.jpg", caption: "" },
          { file: "20170519-203200.jpg", caption: "" }
          ],
        },
        {
          date: "05/20",
          tags: ["SEVERE"],
          text: [
          "We chased a lone Supercell near the town of Freer, Tx west of Corpus Christi. The cell slowly matured and organized while we moved slowly with it. No tornadoes formed with this storm, but the structure was wonderful."
          ],
          photos: [
          { file: "20170520-172541.jpg", caption: "" },
          { file: "20170520-175802.jpg", caption: "" },
          { file: "kdfx-20170520-170518.png", caption: "It's paralleling us on the road" },
          { file: "20170520-180053.jpg", caption: "" },
          { file: "20170520-182535.jpg", caption: "" },
          { file: "20170520-184101.jpg", caption: "" }
          ],
        },
        {
          date: "05/21",
          tags: ["TORNADO", "SEVERE"],
          text: [
          "What a surprising day this was! We woke up and forecasted for a chase near Loredo, TX. But, being near Corpus Christi with 75 degree dew points and backed winds, we still weren't expecting the morning chase that we got right out of the hotel. After 10 minutes of driving, we stopped to watch the base of a small pulse storm. The base was incredibly low, and I thought I saw some rotation. We stopped to watch it and sure enough a funnel began to develop. We blasted over to watch and a funnel about half way to the ground lasted about 5 minutes. We were incredibly surprised, and when we saw another small storm to our southwest, we decided to try our luck with it. Sure enough, it put down a short lived tornado as we were approaching it and a number of funnels as we messed around with it over the next 30 minutes. Technically our chase day hadn't begun yet! After this storm died, we went to Laredo and chased some HP messes that almost got us flooded.",
          "Video #1",
          "Videos #2"
          ],
          photos: [
          { file: "20170521-110108.jpg", caption: "Surprise 5 minute funnel" },
          { file: "kcrp-20170521-111314.png", caption: "First surprise storm dying" },
          { file: "20170521-114143.jpg", caption: "Storm just after the brief tornado lifted" },
          { file: "20170521-120510.jpg", caption: "" },
          { file: "20170521-152308.jpg", caption: "Heavy precip near Laredo" },
          { file: "20170521-153454.jpg", caption: "Floodtastic" }
          ],
        },
        {
          date: "05/22",
          tags: ["SEVERE"],
          text: [
          "Today we chased a somewhat tame severe storm in New Mexico. The deep hail was the highlight of the chase in addition to our stay in Roswell, New Mexico."
          ],
          photos: [
          { file: "20170522-182955.jpg", caption: "Rainbow after the hail core slammed us" },
          { file: "20170522-195348.jpg", caption: "That's deep as hail!" },
          { file: "20170522-213221.jpg", caption: "" }
          ],
        },
        {
          date: "05/26",
          tags: ["TORNADO-WARNED"],
          text: [
          "An excellent chase in Colorado that was just missing a beautiful tornado. We positioned ourselves perfectly on a dirt road in front of a rotating storm but it failed to put anything down. Once it became HP we bailed to a storm behind it with beautiful structure."
          ],
          photos: [
          { file: "20170526-162712.jpg", caption: "Wallcloud right in front of us" },
          { file: "20170526-163123.jpg", caption: "" },
          { file: "20170526-164650.jpg", caption: "" },
          { file: "kgld-20170526-185120.png", caption: "" },
          { file: "20170526-171210.jpg", caption: "Alex getting some shots of a funnel" },
          { file: "20170526-171633.jpg", caption: "" },
          { file: "20170526-173513.jpg", caption: "HP Beast" },
          { file: "20170526-185417.jpg", caption: "Awesome!" },
          { file: "20170526-185746.jpg", caption: "" },
          { file: "20170526-190439.jpg", caption: "" }
          ],
        },
        {
          date: "05/30",
          tags: ["SEVERE"],
          text: [
          "The real action began at sundown on this day in Missouri. We had a nice bit of structure on a severe cell while the sun was up, but once the sun went down, we were given a rare supercell show. Five supercells trained over the exact same location allowing us to intercept them one after another over the course of many dark hours."
          ],
          photos: [
          { file: "20170530-190619.jpg", caption: "Daytime cell" },
          { file: "20170530-195215.jpg", caption: "Sunset" },
          { file: "ksgf-20170530-192538.png", caption: "" },
          { file: "20170530-205245.jpg", caption: "Interesting Structure" },
          { file: "20170530-210609.jpg", caption: "The evening light show begins" },
          { file: "20170530-210709.jpg", caption: "" },
          { file: "20170530-215016.jpg", caption: "There's a beast out there!" },
          { file: "20170530-215343.jpg", caption: "Spooky" },
          { file: "20170530-215622.jpg", caption: "Wild" },
          { file: "20170530-231123.jpg", caption: "" }
          ],
        },
        {
          date: "05/31",
          tags: ["SEVERE"],
          text: [
          "This marked the last day of chasing for Dejan and Matic. We targeted storms in Kansas. Unfortunately, it was shelftastic and somewhat uninteresting. We got rushed by an interesting looking storm before everything became disorganized."
          ],
          photos: [
          { file: "20170531-133631.jpg", caption: "" },
          { file: "20170531-135029.jpg", caption: "" },
          { file: "20170531-135744.jpg", caption: "" },
          { file: "20170531-140631.jpg", caption: "" },
          { file: "20170531-172702.jpg", caption: "" }
          ],
        },
        {
          date: "06/06",
          tags: ["TORNADO"],
          text: [
          "What?! A tornado on Mount Evans in Colorado! It was tough to see but we may have had a short-lived tornado while driving up Mt Evans. We were planning on hiking and getting some lightning shots, but the day turned out quite different from what we expected."
          ],
          photos: [
          { file: "20170606-140943.jpg", caption: "Unedited shot" },
          { file: "20170606-203101.jpg", caption: "Zoomed " },
          { file: "20170606-170516_1.jpg", caption: "" }
          ],
        },
        {
          date: "06/07",
          tags: ["SEVERE"],
          text: [
          "We had a rather frustrating cluster chase in Colorado. We bounced around to multiple storms, and most of the storms were unremarkable. However, we did have a few nice structure moments."
          ],
          photos: [
          { file: "20170607-153313.jpg", caption: "" },
          { file: "20170607-165611.jpg", caption: "" },
          { file: "20170607-172457.jpg", caption: "" },
          { file: "20170607-174458.jpg", caption: "" }
          ],
        },
        {
          date: "06/09",
          tags: ["TORNADOES"],
          text: [
          "We targeted Rugby, North Dakota for tornadic storms, and we were baited south to a lone supercell closer to Bismark, ND. We had the choice between two storms. One down south and one flirting with a boundary. We went against our principle of chasing the storm on the boundary in order to chase the uninterrupted storm down south. We were rewarded with 2 very brief uncondensed tornadoes. As far as we heard, the northern storm didn't get any better.",
          "Video #1"
          ],
          photos: [
          { file: "20170609-175547.jpg", caption: "Storm Organizing" },
          { file: "20170609-184038.jpg", caption: "Brief tornado" },
          { file: "20170609-185429.jpg", caption: "Brief tornado with extremely thin condensation funnel in the top half" },
          { file: "20170609-200303.jpg", caption: "" },
          { file: "20170609-213355.jpg", caption: "" }
          ],
        },
        {
          date: "06/12",
          tags: ["TORNADOES"],
          text: [
          "This day turned out to be the best day of the 2017 season for me! We woke up in Fort Collins, CO, and we planned to target storms forming over Fort Collins later in the day. We had a difficult forecast deciding between a northern and southern target, but we stuck with our principles and the better dynamics and chose the southern target. Unfortunately, we were out of position for the major tornado of the day because of some grasslands with no roads in northern Colorado. However, we did witness many tornadoes throughout the day, and we experienced a variety of other chasing oddities: a storm with 3 mesos and 3 hooks, intertwined mid-level funnels rotating around each other and being sucked up into the updraft, and a derailed train! The storm and tornadoes spanned 3 states: Colorado, Wyoming, and Nebraska. What a great day!"
          ],
          photos: [
          { file: "20170612-151423.jpg", caption: "" },
          { file: "20170612-155327.jpg", caption: "" },
          { file: "kcys-20170612-154128.png", caption: "" },
          { file: "20170612-165502.jpg", caption: "" },
          { file: "20170612-165520.jpg", caption: "" },
          { file: "20170612-165713.jpg", caption: "" },
          { file: "20170612-165834.jpg", caption: "" },
          { file: "20170612-165918.jpg", caption: "" },
          { file: "20170612-170034.jpg", caption: "" },
          { file: "20170612-170526.jpg", caption: "" },
          { file: "20170612-170537_1.jpg", caption: "" },
          { file: "20170612-175327.jpg", caption: "" },
          { file: "kcys-20170612-182021.png", caption: "" },
          { file: "20170612-175722.jpg", caption: "" },
          { file: "20170612-180433.jpg", caption: "" },
          { file: "20170612-181601_1.jpg", caption: "" },
          { file: "20170612-181624.jpg", caption: "" },
          { file: "20170612-182858_1.jpg", caption: "" },
          { file: "20170615-010755_1.jpg", caption: "" },
          { file: "screenshot-20170614-122550.png", caption: "" },
          { file: "20170612-192752.jpg", caption: "" },
          { file: "klnx-20170612-201204.png", caption: "" },
          { file: "20170612-202119.jpg", caption: "" }
          ],
        },
        {
          date: "06/13",
          tags: ["TORNADO"],
          text: [
          "We had a difficult time determining if we saw a tornado in Harvard, NE, but we are pretty sure we did. We targeted a supercell embedded with a line of severe storms. The storm turned right and began moving northeast toward us. The mesocyclone began to tighten and the wallcloud got rain wrapped. We saw a lowering form but ground contact is difficult to verify. My pictures look like a cone tornado is touching down."
          ],
          photos: [
          { file: "20170613-185808.jpg", caption: "Mammatus" },
          { file: "20170613-193556.jpg", caption: "Rain wrapping with lowering" },
          { file: "20170613-193610.jpg", caption: "Rain wrapping with lowering" },
          { file: "20170613-193616.jpg", caption: "Rain wrapping with lowering" },
          { file: "20170613-194649.jpg", caption: "" }
          ],
        },
        {
          date: "06/14",
          tags: ["SEVERE"],
          text: [
          "What a wonderful surprise this day was. We targeted northern KS, but once we realized that storms weren't going to develop, we moved down toward Wichita, KS. We were late to arrive on the severe storms but we arrived right on time for the pink striated supercell! The perfect play of the setting sun on the backside of this storm made for an awesome sight. We observed a small pink funnel before the sun set. After this storm died, we got on another storm that was totally stationary for over 2 hours!"
          ],
          photos: [
          { file: "20170614-205653.jpg", caption: "Pink horseshoe supercell!" },
          { file: "20170614-205656.jpg", caption: "Nice Structure and Striations " },
          { file: "20170614-205724_1.jpg", caption: "" },
          { file: "kict-20170614-215129.png", caption: "" },
          { file: "20170614-220146.jpg", caption: "Stationary Supercell over Wichita, KS" },
          { file: "20170614-220158.jpg", caption: "" }
          ],
        },
        {
          date: "06/16",
          tags: ["FUNNELS", "SEVERE"],
          text: [
          "We targeted southeastern Nebraska away from many of the other chasers. We had a small supercell all to ourselves for the first hour of its life. Plenty of funnels formed and came 1/3 to 1/2 of the way down, but no tornadoes touched down. When night fell, we found ourselves very close to the rain-wrapped mesocyclone of the storm and experienced some 100 mph + winds near Wilbur, NE. As we dove south, we got an awesome view of the shelf cloud that was pushing south."
          ],
          photos: [
          { file: "20170616-195237.jpg", caption: "" },
          { file: "20170617-142101.png", caption: "" },
          { file: "kuex-20170616-212206.png", caption: "" },
          { file: "20170616-220351.jpg", caption: "" },
          { file: "20170616-220406_1.jpg", caption: "" },
          { file: "20170616-220518.jpg", caption: "" },
          { file: "20170616-232557.jpg", caption: "" },
          { file: "ktwx-20170616-232132.png", caption: "" }
          ],
        },
        {
          date: "06/17",
          tags: ["STRUCTURE"],
          text: [
          "This was an \"Oh My God!\" kind of structure day. This is probably some of my favorite structure I've ever seen. Again we chased away from the main horde of chasers, and we got well rewarded for it. This spectacular structure took place almost directly over Greensburg, KS. The supercell wasn't entirely stationary, but it did move very slowly. Unbelievable!"
          ],
          photos: [
          { file: "20170617-195853.jpg", caption: "" },
          { file: "screenshot-20170618-155727.png", caption: "" },
          { file: "screenshot-20170705-184242.png", caption: "" },
          { file: "kddc-20170617-204357.png", caption: "" },
          { file: "20170617-202817_1.jpg", caption: "" },
          { file: "20170618-140120_1.png", caption: "" },
          { file: "akos-great-structure_2.png", caption: "" },
          { file: "screenshot-20170618-134320.png", caption: "" },
          { file: "20170617-203454_1.jpg", caption: "" },
          { file: "screenshot-20170617-213739.png", caption: "" }
          ],
        },
        {
          date: "06/28",
          tags: ["TORNADO"],
          text: [
          "A great chase day with a very cool needle tornado. My friend Nick and I left Tulsa at 6 am and drove to Des Moines, IA. Shortly after we arrived storms fired, and we moved in to intercept. We were a little far out when the first tornado touched down. However, due to the fact that it was on the ground for 20 minutes allowed us to get within a mile of it by the time it dissipated. After hanging out in the falling debris for a few minutes, we continued the chase. We saw a few more wallclouds but no more tornadoes. It was a great first chase for Nick!"
          ],
          photos: [
          { file: "20170628-161739.jpg", caption: "Far Away" },
          { file: "screenshot-20170628-204438.png", caption: "Getting Closer" },
          { file: "screenshot-20170628-204506.png", caption: "Drillbit " },
          { file: "screenshot-20170628-204126.png", caption: "Almost There" },
          { file: "screenshot-20170628-204330.png", caption: "Crazy Ropeout" }
          ],
        },
        {
          date: "06/29",
          tags: ["STRUCTURE"],
          text: [
          "Nick's second chase day brought us to Burlington, KS. No tornadoes on this day, but we did have some very lovely structure. If I could name this supercell, I would call it Gwyneth. The striations are are ridiculous. This slow moving cell took a long time before it developed this structure."
          ],
          photos: [
          { file: "20170629-193909.jpg", caption: "" },
          { file: "20170629-194111.jpg", caption: "" },
          { file: "20170629-194345.jpg", caption: "" },
          { file: "20170629-195558.jpg", caption: "" },
          { file: "20170629-195620.jpg", caption: "" }
          ],
        },
      ],
    },
    {
      year: "2016",
      entries: [
        {
          date: "03/13",
          tags: ["TORNADO-WARNED"],
          text: [
          "Overall, a fun first chase of the season for me! I targeted De Queen, AR. Shortly after I arrived, a cell fired to the south of De Queen and quickly became sever then tornado warned. The wall cloud was ragged and showed little rotation. As I chased it through the hills and forests of Arkansas, it slowly got its act together. No tornadoes formed by the time I was forced to abandon it south of the National Forest."
          ],
          photos: [
          { file: "9990603.png", caption: "Cell South of De Queen, My Location Yellow Cross-hair " },
          { file: "5131536.png", caption: "Tornado Warned Cell" },
          { file: "7843289.jpg", caption: "Storm Base" },
          { file: "5220711.jpg", caption: "Non-rotating Wall Cloud" },
          { file: "2734125.jpg", caption: "Minor Rotation with Tail Cloud" },
          { file: "1579129.png", caption: "Tornado Warned Cell with Hook Echo" },
          { file: "4287811.jpg", caption: "Rotating Wall Cloud" },
          { file: "745765.jpg", caption: "Rotating Wall Cloud Heading Into National Forest" },
          { file: "2637329.jpg", caption: "Southwest Side of Severe Storm" }
          ],
        },
        {
          date: "03/23",
          tags: ["SEVERE"],
          text: [
          "I chased a few severe storms near McAlester, OK. The chase was pleasant but underwhelming. Most of the storm speeds were close to 50 knots, so keeping up with them was difficult. I got some interesting shots of the baby blue belly of a severe storm. Most likely the blue color was caused by sunlight refracting off rain and hail. No tornadoes on any storms made this a somewhat disappointing event."
          ],
          photos: [
          { file: "6980412.jpg", caption: "Small Gust Front/Shelf Cloud on Severe Storm" },
          { file: "2789212.jpg", caption: "Epic Sunset Colors " },
          { file: "6793041.jpg", caption: "" },
          { file: "2251500.jpg", caption: "Blue Belly" },
          { file: "9730560.jpg", caption: "Blue Belly" },
          { file: "3771841.png", caption: "My Distance/Direction with Respect to Distant Storm Shots" }
          ],
        },
        {
          date: "03/30",
          tags: ["TORNADO-WARNED"],
          text: [
          "Three tornado-warned storms and no tornadoes! Come on! Well, even with the lack of tornadoes, this was still a very good chase. I mostly chased in the NE Oklahoma region. Storms had already fired off the dryline by the time I left work. First, I chased the tornado-warned storm near Pawhuska. I dropped it after it fell apart north of Bartlesville. I got on another tornado-warned storm behind it, and chased that one to Coffeyville, Kansas. Then I went south to the Nowata, OK storm and apparently just missed a brief tornado by a few minutes. Unfortunately, I didn't see the Tulsa tornado. It wasn't until later that I saw a visual satellite loop of the region where I noticed that some storm outflow from southern storms in OK had reinforced the Tulsa storm causing it to produce the tornado. Outflow boundaries can make the difference."
          ],
          photos: [
          { file: "2975514.png", caption: "My Location is the Yellow Circle East of the Storm" },
          { file: "9715019.jpg", caption: "View of Updraft Base and Wall Cloud" },
          { file: "997221.jpg", caption: "Massive Anvil " },
          { file: "114585.jpg", caption: "Base/Wall Cloud" },
          { file: "7290057.jpg", caption: "Small Tail Cloud" },
          { file: "7041464.jpg", caption: "Chasemobile with Outflow/Shelf Cloud" },
          { file: "7659086.jpg", caption: "" },
          { file: "3130547.jpg", caption: "First Cell Dying" },
          { file: "9023364.png", caption: "Second Cell Near Caney, Kansas " },
          { file: "6281196.jpg", caption: "Looking SW at the Base" },
          { file: "7326676.jpg", caption: "Pseudo Tornado Cloud. Just a Lookalike, Don't Get Excited " },
          { file: "8251418.jpg", caption: "" },
          { file: "1749149.jpg", caption: "" },
          { file: "2328410.png", caption: "Nowata Tornado Warned Storm. Too Dark for Good Pictures." }
          ],
        },
        {
          date: "04/10",
          tags: ["SEVERE", "FUNNEL"],
          text: [
          "I targeted Altus, OK. Rafal from Australia joined me for this chase. We got on the south side of some severe storms near Vernon, Texas. The storms started messy, but as we chased them east, they got more organized with the better environment. We were treated to some awesome structure, close lightning strikes, and a little funnel near dark. I was introducing myself to another chase when a strike of lightning hit in the field next to us. We could feel the heat of the bolt on our faces! Overall, a really fun and active chase."
          ],
          photos: [
          { file: "3835261.jpg", caption: "Rafal Getting Some Shots" },
          { file: "2434576.jpg", caption: "Bowl Lowering at the End of the Horseshoe" },
          { file: "9338302.jpg", caption: "Rafal's Shot of the Structure" },
          { file: "7367660.jpg", caption: "Shelf" },
          { file: "9794986.jpg", caption: "Nice Structure" },
          { file: "8577167.jpg", caption: "Mothership Landing" },
          { file: "6020062.jpg", caption: "Funnel" },
          { file: "8128924.png", caption: "Reflectivity with Hook at Time of Funnel" },
          { file: "8251976.png", caption: "Velocities at Time of Funnel" }
          ],
        },
        {
          date: "04/16",
          tags: ["SEVERE", "FUNNEL"],
          text: [
          "A mediocre chase near Shamrock, Texas. We had a short run-in with a funnel over the road. And some blah structure. It was fun watching the storm come in from the south."
          ],
          photos: [
          { file: "3730612.jpg", caption: "Rafal and I Watching the Base/Wall Cloud Approach" },
          { file: "8419341.jpg", caption: "" },
          { file: "8626555.jpg", caption: "" },
          { file: "8572442.jpg", caption: "" }
          ],
        },
        {
          date: "04/24",
          tags: ["BUST"],
          text: [
          "BUST!"
          ],
          photos: [
          { file: "7940547.jpg", caption: "Cap Bust" }
          ],
        },
        {
          date: "04/26",
          tags: ["TORNADO-WARNED"],
          text: [
          "Another weak chase day besides the National Weather Service and numerous media outlets hyping the event. I didn't expect much because of the veer-back-veer wind profiles, but I did expect at least one visual tornado. If not from Rafal and me, at least from some other chaser in any of the 4 of states people were chasing in. But alas, nothing to speak of. The most exciting moment of the chase was during our return to Tulsa, and the squall line triggering a tornado warning for Tulsa. Though I drove through some 70 mph straight-line winds and saw some power flashes, no tornadoes developed near me. Note the radar grabs."
          ],
          photos: [
          { file: "1670781.jpg", caption: "Weak Cell" },
          { file: "2998928.jpg", caption: "Whale's Mouth" },
          { file: "966078.jpg", caption: "Shelf Cloud on Leading Edge of Squall Line" },
          { file: "6069936.jpg", caption: "" },
          { file: "6136567.png", caption: "" },
          { file: "7930160.png", caption: "" }
          ],
        },
        {
          date: "05/08",
          tags: ["TORNADO-WARNED"],
          text: [
          "Rafal and I had a nice chase in southwest OK. It was nothing special since we ended up missing the only tornado anywhere that day because of the rain. It was a weak tornado and only on the ground for about 10 seconds. Unfortunately, our vantage point was blocked by rain in the RFD. However, it wasn't a huge loss because the tornado was short, small, and not photogenic. It was cool watching the storms form at the beginning of the chase, though. We watched from birth to death. I accidently deleted the photos:/"
          ],
          photos: [
          { file: "9350267.png", caption: "" },
          { file: "352712.png", caption: "" }
          ],
        },
        {
          date: "05/09",
          tags: ["TORNADO-WARNED"],
          text: [
          "I did my best to get to the spectacular tornadoes in Katie, OK and Sulphur, OK, but I was leaving work after a meeting right when the Katie tornado developed... it would be a 2 hour drive to get there. My only opportunity on this day was catching a tornado-warned storm near Oklahoma City that was LP. I didn't get to it until it was dying, but the bare structure allows you to see the meso and updraft. Still pretty cool looking."
          ],
          photos: [
          { file: "1201555.png", caption: "Southern Storm Producing Huge Wedge. I'm Closing In On The Northern Storm." },
          { file: "1122115.png", caption: "" },
          { file: "2194233.png", caption: "Location At Time of Picture" },
          { file: "7861093.jpg", caption: "" }
          ],
        },
        {
          date: "05/21",
          tags: ["TORNADOES"],
          text: [
          "All in all, a great first day out chasing with Devin and Alex. The day before was their first day to come out and chase with me. We spent that day forecasting and discussing this day. So, they got this beauty on their first chase! The Leoti storm was nearly stationary for 3 hours. We saw 2 short-lived, weak tornadoes and some amazing structure.",
          "Video #1",
          "Video #2"
          ],
          photos: [
          { file: "9259510.jpg", caption: "Base Forming" },
          { file: "122027.jpg", caption: "Wallcloud Forming" },
          { file: "668308.jpg", caption: "Rotating Wallcloud" },
          { file: "5210817.png", caption: "Storm Relative Motion Shows Rough Distance Of Tornado. We Are The Yellow Crosshair " },
          { file: "9767561.jpg", caption: "Small, Brief Tornado" },
          { file: "401597.png", caption: "Storm Relative Motion During Tornado" },
          { file: "6752931.jpg", caption: "Great Structure" },
          { file: "9360238.jpg", caption: "The Vault" },
          { file: "680120.jpg", caption: "Battleship" },
          { file: "2660668.jpg", caption: "Some Happy Dudes!" },
          { file: "1191454.jpg", caption: "Sunset" },
          { file: "1063249.jpg", caption: "Mammatus" }
          ],
        },
        {
          date: "05/22",
          tags: ["TORNADOES"],
          text: [
          "This turned out to be a great day! We diligently waited for a cluster of storms to mature and develop, and we were rewarded with 2 tornadoes near Spearman, TX. The first was a rope that we were within a 1/2 mile of, and the second was a large tornado that became multi-vortex. We had about 15 minutes with these 2 tornadoes on the ground.",
          "Video #1",
          "Video #2"
          ],
          photos: [
          { file: "2277668.png", caption: "Storms Firing To Our SW" },
          { file: "8086992.jpg", caption: "Rope With Excited Chaser Devin" },
          { file: "5446329.jpg", caption: "After The Transition From Rope ToWedge" },
          { file: "5856393.jpg", caption: "YES!" },
          { file: "7838459.jpg", caption: "Big Tornado In A Field... Doesn't Get Much Better Than That" },
          { file: "9885200.jpg", caption: "Transition To Mutli-vortex" }
          ],
        },
        {
          date: "05/23",
          tags: ["TORNADO-WARNED"],
          text: [
          "Unfortunately, no tornadoes today. But, we were on a tornado-warned storm for a while that produced a short funnel. Sorry no pictures of the funnel..."
          ],
          photos: [
          { file: "6561661.png", caption: "" }
          ],
        },
        {
          date: "05/24",
          tags: ["TORNADOES"],
          text: [
          "Dodge City was an epic day with the only drawback being that I wish we were closer. We targeted Ashland, KS. Once we got the thumb's up from the weather gods, we knew it was going to be a good day. The storm fired a few miles west of Ashland. The storm struggled at first. However, it soon became tornado-warned, and once I saw that an outflow boundary was being wrapped into the storm, I knew we were in business. One, two, and occasionally three tornadoes down at one time for over 45 minutes!",
          "Video #1",
          "Video #2",
          "Video #3",
          "Alex's GoPro Video From Dodge City"
          ],
          photos: [
          { file: "9936119.jpg", caption: "Thumb's Up From The Weather Gods" },
          { file: "3152777.jpg", caption: "Our Storm Developing" },
          { file: "2202919.jpg", caption: "Beautiful First  Tornado" },
          { file: "7845797.png", caption: "Storm Sucking In The Boundary. We Are The Small, Yellow Crosshair" },
          { file: "9219306.jpg", caption: "One Big Tornado After Another" },
          { file: "4165358.png", caption: "Beast On Radar" },
          { file: "3371703.jpg", caption: "Livin' The Dream" },
          { file: "3545091.jpg", caption: "EF3" },
          { file: "8772046.png", caption: "High Values On Storm Relative Motion" },
          { file: "7068836.jpg", caption: "Passing Near Dodge City" },
          { file: "8530891.jpg", caption: "Double Rainbow Celebration" }
          ],
        },
        {
          date: "05/26",
          tags: ["TORNADO-WARNED"],
          text: [
          "We had a bit of a catch-up chase on this day. No tornadoes, but I have a good video of our approach to the wallcloud. Too bad there wasn't a tornado. It would have dropped right in front of us!",
          "Video #1"
          ],
          photos: [
          { file: "5542002.png", caption: "" },
          { file: "395033.png", caption: "" },
          { file: "222707.png", caption: "" }
          ],
        },
        {
          date: "06/03",
          tags: ["SEVERE"],
          text: [
          "We chased a severe line of storms in Wisconsin. It was pretty to watch and good fun to chase."
          ],
          photos: [
          { file: "8555785.jpg", caption: "" },
          { file: "5809889.jpg", caption: "" },
          { file: "8712878.jpg", caption: "" },
          { file: "3299556.jpg", caption: "" },
          { file: "9607888.png", caption: "" },
          { file: "2633113.png", caption: "" }
          ],
        },
        {
          date: "06/11",
          tags: ["SEVERE"],
          text: [
          "This started as a fun day but the storms quickly turned messy and lacked rotation. We were on the first storm that fired. We watched it develop and grow over the course of two hours. That's always a fun experience. Watching the birth and development of a storm you're about to chase is a very meaningful and unique element of storm chasing."
          ],
          photos: [
          { file: "3605247.jpg", caption: "Birth Of The First Severe Storm Of The Day" }
          ],
        },
        {
          date: "06/12",
          tags: ["SEVERE"],
          text: [
          "We had a short chase in Wyoming on the way to Denver. Some nice structure and a couple good lightning strikes made for a pleasing impromptu chase."
          ],
          photos: [
          { file: "5968086.jpg", caption: "" },
          { file: "8736168.jpg", caption: "" },
          { file: "1862370.jpg", caption: "" },
          { file: "8670876.jpg", caption: "" }
          ],
        },
        {
          date: "06/15",
          tags: ["SEVERE"],
          text: [
          "This was a great chase for Benn, Dave, and me. We got on a couple severe storms near Turkey, TX. We had some very intense lightning from a picnic lookout in the Caprock State Park. Our primary severe storm was later slammed by another severe storm behind it, enhancing the low level shear, and nearly putting down a tornado. No tornado developed, but it was close. I've never tried to take pictures of lightning before, but these pictures seemed to work out."
          ],
          photos: [
          { file: "5044771.jpg", caption: "" },
          { file: "1188393.jpg", caption: "" },
          { file: "9390557.jpg", caption: "" },
          { file: "6755991.jpg", caption: "" },
          { file: "3302198.png", caption: "Tornado Vortex Signature Where We Witnessed Rotation " },
          { file: "5564992.jpg", caption: "" },
          { file: "1031901.jpg", caption: "" },
          { file: "1946453.png", caption: "" }
          ],
        },
      ],
    },
];
