/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "b48bbc63392d9c468cb871fa968db49d"
  },
  {
    "url": "assets/css/0.styles.aa9d2212.css",
    "revision": "a828fcec4dba6d49e9bc5c841c24b33f"
  },
  {
    "url": "assets/img/011f3ef6-d824-4d43-8b2c-36dab8eaaa72-1.c2350789.png",
    "revision": "c23507898b611f04e4fa110e1108144d"
  },
  {
    "url": "assets/img/014fbc4d-d873-4a12-b160-867ddaed9807.c601d088.jpg",
    "revision": "c601d0884193d6b443a2113f1b8945d1"
  },
  {
    "url": "assets/img/02943a90-7dd4-4e9a-9325-f8217d3cc54d.4bf96136.jpg",
    "revision": "4bf961363fe7d22178b75446aa2b79ff"
  },
  {
    "url": "assets/img/02a1fbfd-7a9d-4114-95df-ca2445587a1f.d385f99b.jpg",
    "revision": "d385f99bcd6464fb14db0597e4d3914e"
  },
  {
    "url": "assets/img/047faac4-a368-4565-8331-2b66253080d3.ffd1805f.jpg",
    "revision": "ffd1805fccc9c3c5b9d08e561d7629af"
  },
  {
    "url": "assets/img/051e436c-0e46-4c59-8f67-52d89d656182.fd84f9ff.png",
    "revision": "fd84f9ffcb35287d0856421ba840e032"
  },
  {
    "url": "assets/img/067b310c-6877-40fe-9dcf-10654e737485.9ae6ee6a.jpg",
    "revision": "9ae6ee6a0db4c54ed7a653b9bceed817"
  },
  {
    "url": "assets/img/094e3ac8-e080-4e94-9f0a-64c25abc695e.1a81aa18.gif",
    "revision": "1a81aa184600e7e3f40057a7a0a52a5b"
  },
  {
    "url": "assets/img/0ad9f7ba-f408-4999-a77a-9b73562c9088.b16b0904.gif",
    "revision": "b16b0904f6dc2fbf3aa84ee43a3deaf0"
  },
  {
    "url": "assets/img/0c6f9930-8704-4a54-af23-19f9ca3e48b0.211d2a6b.jpg",
    "revision": "211d2a6bc9ff701b2028293d360285ee"
  },
  {
    "url": "assets/img/0dae7e93-cfd1-4bd3-97e8-325b032b716f-1572687622947.800c015f.gif",
    "revision": "800c015fdcbe7d0e5a1d2b7f06d3783d"
  },
  {
    "url": "assets/img/0dae7e93-cfd1-4bd3-97e8-325b032b716f.800c015f.gif",
    "revision": "800c015fdcbe7d0e5a1d2b7f06d3783d"
  },
  {
    "url": "assets/img/0dbc4f7d-05c9-4aae-8065-7b7ea7e9709e.cad84e73.gif",
    "revision": "cad84e7372e38e6a909fc698ebedc243"
  },
  {
    "url": "assets/img/0dd2d40a-5b2b-4d45-b176-e75a4cd4bdbf.19e71ada.png",
    "revision": "19e71ada3eedf86aad65a7e134f519b7"
  },
  {
    "url": "assets/img/0f399a9f-1351-4b2d-b8a4-2ebe82b1a703.0c614d2e.jpg",
    "revision": "0c614d2e0551b71c20950b2243a6601f"
  },
  {
    "url": "assets/img/0f8d178b-52d8-491b-9dfd-41e05a952578.931aeb85.gif",
    "revision": "931aeb85e586be282460e416933e04fb"
  },
  {
    "url": "assets/img/101550414151983.a9116fc2.gif",
    "revision": "a9116fc2718b3e760e04b0153dc58961"
  },
  {
    "url": "assets/img/11-1.034d4aa8.png",
    "revision": "034d4aa879e4a8cf155cf0c2c25646f3"
  },
  {
    "url": "assets/img/11-2.217f5403.png",
    "revision": "217f5403733382f932ad376b53aaaa4b"
  },
  {
    "url": "assets/img/11-3.da3a962a.png",
    "revision": "da3a962a17cd26954b001c27fcc51a1b"
  },
  {
    "url": "assets/img/11-4.58108010.png",
    "revision": "58108010bccb3caee94040cbbc1a95e5"
  },
  {
    "url": "assets/img/11-5.d77d7078.png",
    "revision": "d77d7078e6321503f5c55d3e8d96ae3e"
  },
  {
    "url": "assets/img/11-6.457453be.png",
    "revision": "457453be745c2d5bb4031ef4c6bdae6d"
  },
  {
    "url": "assets/img/11-7.0120b253.png",
    "revision": "0120b253e7da69da5ca31cf06aae5008"
  },
  {
    "url": "assets/img/11-8.947628e0.png",
    "revision": "947628e0940046e05c16fae19c992d10"
  },
  {
    "url": "assets/img/111521118015898.83662c9b.gif",
    "revision": "83662c9b61e6591c371f27a838c00e1d"
  },
  {
    "url": "assets/img/111521118445538.508122a2.gif",
    "revision": "508122a2f5cf603358d0e13e519c3727"
  },
  {
    "url": "assets/img/111521118483039.b379b76c.gif",
    "revision": "b379b76cd0a2e12c44e45d66f9f640cd"
  },
  {
    "url": "assets/img/111521118640738.c149bfd1.gif",
    "revision": "c149bfd1560369635d47650d3dfabb09"
  },
  {
    "url": "assets/img/111521119203347.2817dccb.gif",
    "revision": "2817dccb8da5a59439f58e211ae7c17b"
  },
  {
    "url": "assets/img/111521119368714.4306b9b7.gif",
    "revision": "4306b9b7a8de676392ea00b780f819d8"
  },
  {
    "url": "assets/img/111550414182638.e9760400.gif",
    "revision": "e97604005bbe893e3e3367c8feab047f"
  },
  {
    "url": "assets/img/11b27de5-5a9d-45e4-95cc-417fa3ad1d38.2fe1d3f2.jpg",
    "revision": "2fe1d3f22c8f0a728598697286eaa14c"
  },
  {
    "url": "assets/img/12-1.2c1101ff.png",
    "revision": "2c1101ff2b4d3a7e0491a248c17f7ed5"
  },
  {
    "url": "assets/img/12-2.f60c8bb0.png",
    "revision": "f60c8bb0a393f390fb5fe787fadaf8dd"
  },
  {
    "url": "assets/img/12-3.8ce100bc.png",
    "revision": "8ce100bce6b03d02cab470724c98a6d6"
  },
  {
    "url": "assets/img/12-4.b8481c6e.png",
    "revision": "b8481c6ecaa92a9f556c3f94ea35bea4"
  },
  {
    "url": "assets/img/12-5.fc69ff8f.png",
    "revision": "fc69ff8f021f5769cfadfe8ca79e9bb2"
  },
  {
    "url": "assets/img/12-6.494017d6.png",
    "revision": "494017d66193d9c5e6ace076ac6aa3f2"
  },
  {
    "url": "assets/img/12-7.a764cd24.png",
    "revision": "a764cd244dddab5988d7d0ce81e3535c"
  },
  {
    "url": "assets/img/12-8.9a0979de.png",
    "revision": "9a0979ded7db7f2d1802d30459d82c70"
  },
  {
    "url": "assets/img/1202b2d6-9469-4251-bd47-ca6034fb6116.bd994a00.png",
    "revision": "bd994a00ff32e89dd98eeae5d3198c78"
  },
  {
    "url": "assets/img/14389ea4-8d96-4e96-9f76-564ca3324c1e.a9a348f7.png",
    "revision": "a9a348f7c52bcb6ba046e8b8c6442e04"
  },
  {
    "url": "assets/img/1492928416812_4.cada9038.png",
    "revision": "cada9038fe8d2e6951fce3ca32a25b12"
  },
  {
    "url": "assets/img/1492929000361_5.6ed5242e.png",
    "revision": "6ed5242ecfce91bc0611babacf774291"
  },
  {
    "url": "assets/img/1492929553651_7.80f8b28f.png",
    "revision": "80f8b28f3f9540e7b8afe6fa783f90d7"
  },
  {
    "url": "assets/img/1556770b-8c01-4681-af10-46f1df69202c.b216f659.jpg",
    "revision": "b216f659f1ac02ff8636c04b55db0977"
  },
  {
    "url": "assets/img/15851555-5abc-497d-ad34-efed10f43a6b.15cb81ce.png",
    "revision": "15cb81cec6c768a3f8c4f547a94a1adf"
  },
  {
    "url": "assets/img/1a9977e4-2f5c-49a6-aec9-f3027c9f46a7.7514c8bb.png",
    "revision": "7514c8bb695f36fbeb177ae5df7495c1"
  },
  {
    "url": "assets/img/2_14_microkernelArchitecture.72331340.jpg",
    "revision": "72331340b1279112eabbbff91a9e8508"
  },
  {
    "url": "assets/img/2-1.9743052d.png",
    "revision": "9743052d2eb5fa5f4cfdd437462e9b16"
  },
  {
    "url": "assets/img/2-2.0080f210.png",
    "revision": "0080f210be9a6dd5190b635f8895e07f"
  },
  {
    "url": "assets/img/22fda4ae-4dd5-489d-ab10-9ebfdad22ae0.9761f39b.jpg",
    "revision": "9761f39b4c3313112dacf09fa609c075"
  },
  {
    "url": "assets/img/23219e4c-9fc0-4051-b33a-2bd95bf054ab.8598acb7.jpg",
    "revision": "8598acb77cb95719bd01a51fe70dbcb2"
  },
  {
    "url": "assets/img/23b9d625-ef28-42b5-bb22-d7aedd007e16.123293dc.jpg",
    "revision": "123293dc12a8fce90c3432c8dc2d378a"
  },
  {
    "url": "assets/img/23ba890e-e11c-45e2-a20c-64d217f83430.75d54050.png",
    "revision": "75d540501b4979121d3834bca9bad183"
  },
  {
    "url": "assets/img/2719067e-b299-4639-9065-bed6729dbf0b.d7dc0987.png",
    "revision": "d7dc0987f82effcd38d61764fad8b1a2"
  },
  {
    "url": "assets/img/278fe431-af88-4a95-a895-9c3b80117de3.ec2c338f.jpg",
    "revision": "ec2c338fe1833becd6fe602d0508141d"
  },
  {
    "url": "assets/img/2a1f8b0f-1dd7-4409-b177-a381c58066ad.3047ff24.png",
    "revision": "3047ff2476ad98bb808191d79ba4e8b0"
  },
  {
    "url": "assets/img/2b8bfd57-b4d1-4a75-bfb0-bcf1fba4014a.7b05951a.png",
    "revision": "7b05951ab9cf32bc92c4881f96547d99"
  },
  {
    "url": "assets/img/2bcc58ad-bf7f-485c-89b5-e7cafc211ce2.b76d9a55.jpg",
    "revision": "b76d9a55a18c76ae345902a7ea501381"
  },
  {
    "url": "assets/img/3-1.24de7795.png",
    "revision": "24de779561a6413fe9d16561caadff83"
  },
  {
    "url": "assets/img/3-2.15d95cb5.png",
    "revision": "15d95cb57fa588e7389a4053a54ef9e6"
  },
  {
    "url": "assets/img/3-3.125d03a1.png",
    "revision": "125d03a1866910072500e1074a33a533"
  },
  {
    "url": "assets/img/3-4.84327ab3.png",
    "revision": "84327ab327c0d07eca39d5d5d1148f71"
  },
  {
    "url": "assets/img/3-5.e776868c.png",
    "revision": "e776868c576c2736dade7f4b8f9d3d93"
  },
  {
    "url": "assets/img/3-6.5cbf58e2.png",
    "revision": "5cbf58e2d3c7f0662d0ed6d01b97bc62"
  },
  {
    "url": "assets/img/3-7.658eb0c6.png",
    "revision": "658eb0c65a5a2b8daf0518b284244654"
  },
  {
    "url": "assets/img/3-9.437a8447.png",
    "revision": "437a8447f104d2158b5ec694fa3283f1"
  },
  {
    "url": "assets/img/31b7e8de-ed11-4f69-b5fd-ba454120ac31.23df9ef5.jpg",
    "revision": "23df9ef5103e92fa7110d148ffeed177"
  },
  {
    "url": "assets/img/31d9adce-2af8-4754-8386-0aabb4e500b0.4beb6ffc.png",
    "revision": "4beb6ffc1608f22e830923f56a5eb715"
  },
  {
    "url": "assets/img/335fe19c-4a76-45ab-9320-88c90d6a0d7e.a38ff8ca.png",
    "revision": "a38ff8caa212b9ded22d0d642bad7fc1"
  },
  {
    "url": "assets/img/35253fa4-f60a-4e3b-aaec-8fc835aabdac.f96238de.gif",
    "revision": "f96238de82b08c2f0779641ee275ed91"
  },
  {
    "url": "assets/img/35a8c711-0dc0-4613-95f3-be96c6c6e104.792eec1b.gif",
    "revision": "792eec1bf5a2e627ef3ae67406fa6a8e"
  },
  {
    "url": "assets/img/379444c9-f1d1-45cd-b7aa-b0c18427d388.fd31fa30.jpg",
    "revision": "fd31fa30daacbcbb415b35795f70ce6e"
  },
  {
    "url": "assets/img/390c913b-5f31-444f-bbdb-2b88b688e7ce.50af6e00.jpg",
    "revision": "50af6e009784845b2cb645b1ab0b8336"
  },
  {
    "url": "assets/img/3d5b828e-5c4d-48d8-a440-281e4a8e1c92.2ba9f19f.png",
    "revision": "2ba9f19fdc1ceda5ec7d33f528533b13"
  },
  {
    "url": "assets/img/3ea280b5-be7d-471b-ac76-ff020384357c.aaa9b59f.gif",
    "revision": "aaa9b59f2d5f8f9c638bfcf96d5f3654"
  },
  {
    "url": "assets/img/4-1.1bc75b80.png",
    "revision": "1bc75b80e6cc21a0ae749754bb8bf9e8"
  },
  {
    "url": "assets/img/4-2.477265a3.png",
    "revision": "477265a3d6eec7e020dc51a97907fe28"
  },
  {
    "url": "assets/img/4-3.3092780f.png",
    "revision": "3092780f7643eadc12383695880f1642"
  },
  {
    "url": "assets/img/437cb54c-5970-4ba9-b2ef-2541f7d6c81e.eafe6372.gif",
    "revision": "eafe6372da8beae23965e0350f68d5ec"
  },
  {
    "url": "assets/img/43d323ac-9f07-4e4a-a315-4eaf8c38766c.b101e8a3.jpg",
    "revision": "b101e8a3bf1d1a97a0dad9e8b3319ff4"
  },
  {
    "url": "assets/img/44d33643-1004-43a3-b99a-4d688a08d0a1.47cf56eb.png",
    "revision": "47cf56eb40f7d6b51702db8017b6ff50"
  },
  {
    "url": "assets/img/476329d4-e2ef-4f7b-8ac9-a52a6f784600.2876029c.png",
    "revision": "2876029ca807bde0916b436215f43eb1"
  },
  {
    "url": "assets/img/47d98583-8bb0-45cc-812d-47eefa0a4a40.aa1fc122.jpg",
    "revision": "aa1fc12212b7e6d3585b3b057fdafa31"
  },
  {
    "url": "assets/img/49d2adc1-b28a-44bf-babb-d44993f4a2e3.90c8c1c7.gif",
    "revision": "90c8c1c7d3aed5e0874bc09d4cce3453"
  },
  {
    "url": "assets/img/4ab87717-e264-4232-825d-8aaf08f14e8b.00498410.jpg",
    "revision": "00498410aa268dec6416e00683d3d32d"
  },
  {
    "url": "assets/img/4c457532-550b-4eca-b881-037b84b4934b.acd43cda.jpg",
    "revision": "acd43cdabc8146741ef85338e51b0b9b"
  },
  {
    "url": "assets/img/4cf711a8-7ab2-4152-b85c-d5c226733807.fb25bb47.png",
    "revision": "fb25bb47be56baf5eda32b9a50cdd358"
  },
  {
    "url": "assets/img/5-1.08d322a1.png",
    "revision": "08d322a1463d832440786602c53232be"
  },
  {
    "url": "assets/img/5-2.ecaa5ce1.png",
    "revision": "ecaa5ce156842d99e81771d3accfe924"
  },
  {
    "url": "assets/img/5-3.e01b75cc.png",
    "revision": "e01b75cc72121940313e0aba326694aa"
  },
  {
    "url": "assets/img/50831a6f-2777-46ea-a571-29f23c85cc21.f19d985f.jpg",
    "revision": "f19d985f9b2d5a63d11cd6fc9066ea9f"
  },
  {
    "url": "assets/img/51e2ed95-65b8-4ae9-8af3-65602d452a25.cc8e319f.jpg",
    "revision": "cc8e319fdb5ba49d1f64998e85ba9dda"
  },
  {
    "url": "assets/img/55dc4e84-573d-4c13-a765-52ed1dd251f9.fe9d48e9.png",
    "revision": "fe9d48e93a18fb595ccc4e13b7a6c96c"
  },
  {
    "url": "assets/img/5f5c22d5-9c0e-49e1-b5b0-6cc7032724d4.b29547de.png",
    "revision": "b29547dee410c901c718fb1a0733cef6"
  },
  {
    "url": "assets/img/6-1.e61c2dda.png",
    "revision": "e61c2dda7761e67bc6d75c2143b5d05e"
  },
  {
    "url": "assets/img/6-2.a2e38545.png",
    "revision": "a2e385459253b732e21d81c01d1b05fc"
  },
  {
    "url": "assets/img/6019b2db-bc3e-4408-b6d8-96025f4481d6.526a760a.png",
    "revision": "526a760a355ca94a1263dbb99e5899fb"
  },
  {
    "url": "assets/img/60c4a44c-7829-4242-b3a1-26c3b513aaf0.231a6b0f.gif",
    "revision": "231a6b0fe52ab24fcd061cf570fe50c1"
  },
  {
    "url": "assets/img/62e77997-6957-4b68-8d12-bfd609bb2c68.61cc0271.jpg",
    "revision": "61cc02718498f89439d43de60650edda"
  },
  {
    "url": "assets/img/63c8ffea-a9f2-4ebe-97d1-d71be71246f9.fc127e60.jpg",
    "revision": "fc127e60a05e87f50e469cd6fe7d9159"
  },
  {
    "url": "assets/img/643b6f18-f933-4ac5-aa7a-e304dbd7fe49.91f19b25.gif",
    "revision": "91f19b25dfad8c40f58e7f0ad120d3f2"
  },
  {
    "url": "assets/img/66192382-558b-4b05-a35d-ac4a2b1a9811.8f9e192a.jpg",
    "revision": "8f9e192a3088a3191940f352bec05910"
  },
  {
    "url": "assets/img/6980aef0-debe-4b4b-8da5-8b1befbc1408.3a357aa5.gif",
    "revision": "3a357aa51f518a79f740282e310a623d"
  },
  {
    "url": "assets/img/6b833bc2-517a-4270-8a5e-0a5f6df8cd96.0d43ee1e.png",
    "revision": "0d43ee1e640714393d8b0581cfd99c00"
  },
  {
    "url": "assets/img/7002c01b-1ed5-475a-9e5f-5fc8a4cdbcc0.4fc3f365.jpg",
    "revision": "4fc3f36584574dc3ccaa6cdd5d4a8248"
  },
  {
    "url": "assets/img/7008dc2b-6f13-4174-a516-28b2d75b0152.0778eb2b.gif",
    "revision": "0778eb2b5a4731a8b6f764b78fc0b960"
  },
  {
    "url": "assets/img/71550414107576.c5716777.gif",
    "revision": "c571677785e2d616c058eff45bb3eccb"
  },
  {
    "url": "assets/img/7818c574-97a8-48db-8e62-8bfb030b02ba.82e9bae7.png",
    "revision": "82e9bae7b79ab5a331263707f302ab24"
  },
  {
    "url": "assets/img/79c6f036-bde6-4393-85a3-ef36a0327bd2.4f4a453c.png",
    "revision": "4f4a453c33acb49bfccd18d101bce4a8"
  },
  {
    "url": "assets/img/7a29acce-f243-4914-9f00-f2988c528412.4072191d.jpg",
    "revision": "4072191d63b7caddf998cb2fe821db27"
  },
  {
    "url": "assets/img/7a85e285-e152-4116-b6dc-3fab27ba9437.61e72571.jpg",
    "revision": "61e72571f50fe64d2b175e563a958b90"
  },
  {
    "url": "assets/img/7b281b1e-0595-402b-ae35-8c91084c33c1.b474cff8.png",
    "revision": "b474cff84a3523ae4fac997c7daeefc3"
  },
  {
    "url": "assets/img/7b3efa99-d306-4982-8cfb-e7153c33aab4.07a03d4d.png",
    "revision": "07a03d4da61ff30b82bcff25256c3c23"
  },
  {
    "url": "assets/img/7bd202a7-93d4-4f3a-a878-af68ae25539a.cc646fa6.png",
    "revision": "cc646fa6b311a937a1c795d0f5100dd9"
  },
  {
    "url": "assets/img/7c54de21-e2ff-402e-bc42-4037de1c1592.77db1027.png",
    "revision": "77db1027e909ec6163894226247da7a9"
  },
  {
    "url": "assets/img/8-1.d9a7e4d7.png",
    "revision": "d9a7e4d7f5d104297caba941001205bd"
  },
  {
    "url": "assets/img/8-2.b9ca27fd.png",
    "revision": "b9ca27fd9836ff74c494e3b5c47430e8"
  },
  {
    "url": "assets/img/8-4.ffa93066.png",
    "revision": "ffa9306652bb68067144574352f5ad4b"
  },
  {
    "url": "assets/img/8-5.13a44fc3.png",
    "revision": "13a44fc3c04809e103f72876ad97bcb8"
  },
  {
    "url": "assets/img/8006a450-6c2f-498c-a928-c927f758b1d0.d6129289.png",
    "revision": "d61292895db07e1bc0ccf8eb6cc1d0fb"
  },
  {
    "url": "assets/img/807f4258-dba8-4c54-9c3c-a707c7ccffa2.cc337f66.jpg",
    "revision": "cc337f668beb09747c5b0f19b5aff345"
  },
  {
    "url": "assets/img/81538cd5-1bcf-4e31-86e5-e198df1e013b.1de539c4.jpg",
    "revision": "1de539c45e97c39d6369985f5c07d36c"
  },
  {
    "url": "assets/img/83d466bd-946b-4430-854a-cf7b0696d4c8.5792e8b9.jpg",
    "revision": "5792e8b969ac843ac1b04017cd0bfce2"
  },
  {
    "url": "assets/img/8441b2c4-dca7-4d6b-8efb-f22efccaf331.c3a0c699.png",
    "revision": "c3a0c699a59b8418037eb040ee8a1430"
  },
  {
    "url": "assets/img/8442519f-0b4d-48f4-8229-56f984363c69.8b780e78.png",
    "revision": "8b780e78a0af2dc2c728245a69cc590c"
  },
  {
    "url": "assets/img/84a5b15a-86c5-4d8e-9439-d9fd5a4699a1.47d5395e.jpg",
    "revision": "47d5395e871ace9d9acd0eec67911ac9"
  },
  {
    "url": "assets/img/85c05fb1-5546-4c50-9221-21f231cdc8c5.b6dcbf8d.jpg",
    "revision": "b6dcbf8d4b16bc4f6d9b63e20cb473d9"
  },
  {
    "url": "assets/img/86e6a91d-a285-447a-9345-c5484b8d0c47.2e9e39c4.png",
    "revision": "2e9e39c426a74a61ce17a52fe7bd7d07"
  },
  {
    "url": "assets/img/89292ae1-5f13-44dc-b508-3f035e80bf89.7d175ab5.png",
    "revision": "7d175ab52123e7f573febb1db5dacd2b"
  },
  {
    "url": "assets/img/8996a537-7c4a-4ec8-a3b7-7ef1798eae26.fa3d063c.png",
    "revision": "fa3d063cb9699fa357de03acee03389d"
  },
  {
    "url": "assets/img/8edc5164-810b-4cc5-bda8-2a2c98556377.b7fd8ffa.jpg",
    "revision": "b7fd8ffaf037c109953da10910425a03"
  },
  {
    "url": "assets/img/9-10.121b9e3d.png",
    "revision": "121b9e3d94126ae88f2a949b937fc0b0"
  },
  {
    "url": "assets/img/9-11.31201e0a.png",
    "revision": "31201e0a0018dd7dd529340c40e95e1e"
  },
  {
    "url": "assets/img/9-12.777f19a1.png",
    "revision": "777f19a1fb9a3c74f5f5c632cd759c60"
  },
  {
    "url": "assets/img/9-13.73e7f89a.png",
    "revision": "73e7f89acd57bfb4c5f3824bf2d67530"
  },
  {
    "url": "assets/img/9-14.567fec29.png",
    "revision": "567fec29a82388b07baec4b6742ab86c"
  },
  {
    "url": "assets/img/9-15.a4bf5b4b.png",
    "revision": "a4bf5b4bfbfe8673993919a22df26d83"
  },
  {
    "url": "assets/img/9-16.3cd336c3.png",
    "revision": "3cd336c3be38ed1d0c151f84c2d93fd1"
  },
  {
    "url": "assets/img/9-17.fe82c291.png",
    "revision": "fe82c2912ad71fe8e57ce4489b1307e2"
  },
  {
    "url": "assets/img/9-18.d0ad15af.png",
    "revision": "d0ad15afc0b72b8c8cf9a929405909e7"
  },
  {
    "url": "assets/img/9-19.bb3490af.png",
    "revision": "bb3490afff56f3d9cfec3746bc9a3a78"
  },
  {
    "url": "assets/img/9-2.e19666a3.png",
    "revision": "e19666a3752baa752db8e3a05811c259"
  },
  {
    "url": "assets/img/9-20.ba054928.png",
    "revision": "ba05492884b7ac0e33edac82e4fdd69e"
  },
  {
    "url": "assets/img/9-21.656e8a34.png",
    "revision": "656e8a3403a77d97d22b611ade27b01f"
  },
  {
    "url": "assets/img/9-3.a7726e82.png",
    "revision": "a7726e82355930297609b4364472a8ae"
  },
  {
    "url": "assets/img/9-4.1c68220f.png",
    "revision": "1c68220f2cbc749461ac5730793947c4"
  },
  {
    "url": "assets/img/9-5.88de5545.png",
    "revision": "88de55458ef2bfe9825100cf981f6a2c"
  },
  {
    "url": "assets/img/9-6.8b2e9e3d.png",
    "revision": "8b2e9e3da250c33331eb8e71081c4994"
  },
  {
    "url": "assets/img/9-7.631e184f.png",
    "revision": "631e184f1bd45e939816b5a203eed9b7"
  },
  {
    "url": "assets/img/9-8.d416885d.png",
    "revision": "d416885dfaaf473517b74250e9768c71"
  },
  {
    "url": "assets/img/9-9.2c3a9130.png",
    "revision": "2c3a913000b2d366d9aa3c2e4ded1abe"
  },
  {
    "url": "assets/img/91550414131331.e60d9756.gif",
    "revision": "e60d9756f05d881d5d33906655fc0ed5"
  },
  {
    "url": "assets/img/924914c0-660c-4e4a-bbc0-1df1146e7516.ca65b368.jpg",
    "revision": "ca65b368fa76427863580bb17a1158dc"
  },
  {
    "url": "assets/img/95080fae-de40-463d-a76e-783a0c677fec.7c2c842a.gif",
    "revision": "7c2c842a66aa96edb8121dc0df53cea7"
  },
  {
    "url": "assets/img/95903878-725b-4ed9-bded-bc4aae0792a9.09890279.jpg",
    "revision": "09890279d02597c9f902030483eb7a02"
  },
  {
    "url": "assets/img/9709694b-db05-4cce-8d2f-1c8b09f4d921.4606122a.png",
    "revision": "4606122a15881481de12a694053deee2"
  },
  {
    "url": "assets/img/9b679ff5-94c6-48a7-b9b7-2ea868e828ed.bf0c6b39.png",
    "revision": "bf0c6b39f7784ee5016c6efee912e3dd"
  },
  {
    "url": "assets/img/9b838aee-0996-44a5-9b0f-3d1e3e2f5100.caeb1541.png",
    "revision": "caeb1541230c140c1a57d9b06ddf8b38"
  },
  {
    "url": "assets/img/9bbddeeb-e939-41f0-8e8e-2b1a0aa7e0a7.992c8043.png",
    "revision": "992c80433fe0f5b553a4bea464ab6057"
  },
  {
    "url": "assets/img/9c422923-1447-4a3b-a4e1-97e663738187.214860dd.jpg",
    "revision": "214860dd7369d03709b08969a1d41432"
  },
  {
    "url": "assets/img/9cd0ae20-4fb5-4017-a000-f7d3a0eb3529.27d73d89.png",
    "revision": "27d73d89815b310aacdb11e2317112ed"
  },
  {
    "url": "assets/img/9d1deeba-4ae1-41dc-98f4-47d85b9831bc.6d9db2f8.gif",
    "revision": "6d9db2f8df9c41e3c24d77d2ce8f0789"
  },
  {
    "url": "assets/img/9daa3616-00a4-48c4-9146-792dc8499be3.dc6e1905.jpg",
    "revision": "dc6e1905e372da6b3b295fe190dd8beb"
  },
  {
    "url": "assets/img/a3253deb-8d21-40a1-aae4-7d178e4aa319.b57e32c7.jpg",
    "revision": "b57e32c7e2d015b1e0e8e48b0167d739"
  },
  {
    "url": "assets/img/a42ad3a7-3574-4c48-a783-ed3d08a0688a.bfd432ca.jpg",
    "revision": "bfd432ca24fc04f5f7588cc330c20ef8"
  },
  {
    "url": "assets/img/a9077f06-7584-4f2b-8c20-3a8e46928820.2d5e2e03.jpg",
    "revision": "2d5e2e03d640eebdc1743aa8af7164d3"
  },
  {
    "url": "assets/img/ac6a794b-68c0-486c-902f-8d988eee5766.6507f605.png",
    "revision": "6507f60556a8b83d59228226ecad9853"
  },
  {
    "url": "assets/img/ad5cc8fc-d59b-45ce-8899-63a18320d97e.98408b96.gif",
    "revision": "98408b9669398d14763f02560200ce10"
  },
  {
    "url": "assets/img/adj-comp-unrulely.bc625d9b.jpg",
    "revision": "bc625d9b817adb32671afee387b5b44d"
  },
  {
    "url": "assets/img/adj-pos.6f60bf12.jpg",
    "revision": "6f60bf1213e9334b9d7a6f2b35a43f18"
  },
  {
    "url": "assets/img/af198da1-2480-4043-b07f-a3b91a88b815.1f88a047.png",
    "revision": "1f88a04756c0032ce3c9e8273b58429e"
  },
  {
    "url": "assets/img/b0611f89-1e5f-4494-a795-3544bf65042a.fcec1186.gif",
    "revision": "fcec11861486522e3dad8d8dc9d3f136"
  },
  {
    "url": "assets/img/b1fa0453-a4b0-4eae-a352-48acca8fff74.a5a1315f.png",
    "revision": "a5a1315fdf2207fa36571800622d12d4"
  },
  {
    "url": "assets/img/b396d726-b75f-4a32-89a2-03a7b6e19f6f.62b33b5e.jpg",
    "revision": "62b33b5eca6ad5d414fe8c642f867976"
  },
  {
    "url": "assets/img/b54eeb16-0b0e-484c-be62-306f57c40d77.2b0195fb.jpg",
    "revision": "2b0195fb258589a724391840bb727cda"
  },
  {
    "url": "assets/img/b8922f8c-95e6-4187-be85-572a509afb71.e462b600.png",
    "revision": "e462b600f152792c306e4711adacf32b"
  },
  {
    "url": "assets/img/b903fda8-07d0-46a7-91a7-e803892895cf.7a662579.gif",
    "revision": "7a662579a815828a7e175142e178d328"
  },
  {
    "url": "assets/img/b988877c-0f0a-4593-916d-de2081320628.68e019e5.jpg",
    "revision": "68e019e5f0f58169d13298a2659a77db"
  },
  {
    "url": "assets/img/b9d79a5a-e7af-499b-b989-f10483e71b8b.36485444.jpg",
    "revision": "364854448051cb9e983847d9624cb3fa"
  },
  {
    "url": "assets/img/baaa681f-7c52-4198-a5ae-303b9386cf47.cd136380.png",
    "revision": "cd1363804a4c1a590dafd3c2577b75b9"
  },
  {
    "url": "assets/img/bb6a49be-00f2-4f27-a0ce-4ed764bc605c.9a7eeb4b.png",
    "revision": "9a7eeb4b33c0a5e2c9b2fb06ad0d121b"
  },
  {
    "url": "assets/img/bc6be2d0-ed5e-4def-89e5-3ada9afa811a.3dd297f2.gif",
    "revision": "3dd297f2808b0759c08f524ec6f170bb"
  },
  {
    "url": "assets/img/be5c2c61-86d2-4dba-a289-b48ea23219de.123be26b.jpg",
    "revision": "123be26b3b71f23def2d5350d2c9b53a"
  },
  {
    "url": "assets/img/be608a77-7b7f-4f8e-87cc-f2237270bf69.3b662049.png",
    "revision": "3b662049f6ad09720f65c117d275caae"
  },
  {
    "url": "assets/img/bf667594-bb4b-4634-bf9b-0596a45415ba.55baa72f.jpg",
    "revision": "55baa72ff5a4049fa3e2727606e41726"
  },
  {
    "url": "assets/img/bfea8772-d01b-4a51-8adc-edfd7d3dce84.b9c52d74.jpg",
    "revision": "b9c52d7413bf137f1728e9a63489362c"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/browser_parse_html.a4a99b39.png",
    "revision": "a4a99b39482c51213380a22373f467d0"
  },
  {
    "url": "assets/img/browser_parse_rendertree.b8b35e2b.png",
    "revision": "b8b35e2bcd6a5fb65c9277bbde01fb37"
  },
  {
    "url": "assets/img/BSD_disk.34444dfd.png",
    "revision": "34444dfd6081914f90150a249aa85e8e"
  },
  {
    "url": "assets/img/btree.6c3c1bb9.png",
    "revision": "6c3c1bb99e9357c0e3227934b583f18c"
  },
  {
    "url": "assets/img/c0874e0a-dba3-467e-9c86-dd9313e0843e.f550b50e.jpg",
    "revision": "f550b50e2a2deab1b79b23f421f2e9b7"
  },
  {
    "url": "assets/img/c0a9fa91-da2e-4892-8c9f-80206a6f7047.b2e3b1fb.png",
    "revision": "b2e3b1fbee3782d44692ed61238caa81"
  },
  {
    "url": "assets/img/c13e2a3d-b01c-4a08-a69b-db2c4e821e09.25e7840e.png",
    "revision": "25e7840e8f8de83e657ac5103741a31f"
  },
  {
    "url": "assets/img/c269e362-1128-4212-9cf3-d4c12b363b2f.81d0ed34.gif",
    "revision": "81d0ed342a1fe627e279efa8693bba94"
  },
  {
    "url": "assets/img/c2ca8dd2-8d00-4a3e-bece-db7849ac9cfd.ee8c750b.gif",
    "revision": "ee8c750b9d2b81ab0a0b99f2b78959b0"
  },
  {
    "url": "assets/img/c3369072-c740-43b0-b276-202bd1d3960d.172deddf.jpg",
    "revision": "172deddfdfd7d9cb32dd2619395f5a3f"
  },
  {
    "url": "assets/img/c34f4503-f62c-4043-9dc6-3e03288657df.97c84f0d.jpg",
    "revision": "97c84f0d61c70f80098feac4131bbab3"
  },
  {
    "url": "assets/img/c44a0342-f405-4f17-b750-e27cf4aadde2.e30c8c71.png",
    "revision": "e30c8c71803b133bed8a4725d2bd9da0"
  },
  {
    "url": "assets/img/c4859290-e27d-4f12-becf-e2a5c1f3a275.ec1283b2.gif",
    "revision": "ec1283b2ab45512b0dd5f6874406187c"
  },
  {
    "url": "assets/img/c625baa0-dde6-449e-93df-c3a67f2f430f.45b5d841.jpg",
    "revision": "45b5d841a796745554f8a83964ff94c0"
  },
  {
    "url": "assets/img/c9cfd600-bc91-4f3a-9f99-b42f88a5bb24.f12aeac2.jpg",
    "revision": "f12aeac29005498dcfaca8c9b1812600"
  },
  {
    "url": "assets/img/cbf50eb8-22b4-4528-a2e7-d187143d57f7.b108df16.png",
    "revision": "b108df167c7cb60ed2917ad3a0e62f37"
  },
  {
    "url": "assets/img/cf4386a1-58c9-4eca-a17f-e12b1e9770eb.11cef3a7.png",
    "revision": "11cef3a715cf5826320dc509a2ae3c0a"
  },
  {
    "url": "assets/img/d156bcda-ac8d-4324-95e0-0c8df41567c9.3f9e35f2.gif",
    "revision": "3f9e35f284216fcab8b5dfc25a8a3710"
  },
  {
    "url": "assets/img/d27c99f0-7881-4f2d-9675-c75cbdee3acd.3190051f.jpg",
    "revision": "3190051fe890050d039f6230ca797fb1"
  },
  {
    "url": "assets/img/d2ae9932-e2b1-4191-8ee9-e573f36d3895.9703e915.png",
    "revision": "9703e915dd52060a89a01a455faa7e5b"
  },
  {
    "url": "assets/img/db5e376d-0b3e-490e-a43a-3231914b6668.4de001bc.png",
    "revision": "4de001bc1fa5061c6cddc6f70420bdef"
  },
  {
    "url": "assets/img/db5f30a7-8bfa-4ecc-ab5d-747c77818964.e4125e56.gif",
    "revision": "e4125e56fc4da0c96db857fc4ebc9e5e"
  },
  {
    "url": "assets/img/dd563037-fcaa-4bd8-83b6-b39d93a12c77.bf2827bc.jpg",
    "revision": "bf2827bca492f32d1b6a9e9f4f22510f"
  },
  {
    "url": "assets/img/dns.3f60e2b9.jpg",
    "revision": "3f60e2b9e392884a913801ed7cf4f84f"
  },
  {
    "url": "assets/img/docker-filesystems-busyboxrw.7e83ec9b.png",
    "revision": "7e83ec9b275f1b8648338f5d16d41a45"
  },
  {
    "url": "assets/img/e130e5b8-b19a-4f1e-b860-223040525cf6.264739fc.jpg",
    "revision": "264739fc0a32ffc6d67d75e202590cb0"
  },
  {
    "url": "assets/img/e69537d2-a016-4676-b169-9ea17eeb9037.82d1f1b1.gif",
    "revision": "82d1f1b18201036f9573f17c1666e40c"
  },
  {
    "url": "assets/img/e92d0ebc-7d46-413b-aec1-34a39602f787.c4ffddc0.png",
    "revision": "c4ffddc0126f19d53517240449f63f32"
  },
  {
    "url": "assets/img/e98deb5a-d5d4-4294-aa9b-9220d4483403.86f9e225.jpg",
    "revision": "86f9e2255f3fef2d645f0463d4869d75"
  },
  {
    "url": "assets/img/e98e9d20-206b-4533-bacf-3448d0096f38.b278d7e2.png",
    "revision": "b278d7e2d0343ddf7989c3d2b216bedf"
  },
  {
    "url": "assets/img/ed5522bb-3a60-481c-8654-43e7195a48fe.f1d9d5d8.png",
    "revision": "f1d9d5d842333deaf021088187799c9a"
  },
  {
    "url": "assets/img/ef25ff7c-0f63-420d-8b30-eafbeea35d11.17851455.gif",
    "revision": "1785145538c5aa8422b7edb31602140d"
  },
  {
    "url": "assets/img/f1912ba6-6402-4321-9aa8-13d32fd121d1.a6da67f7.jpg",
    "revision": "a6da67f7c81aa694387e3061c3a34bfe"
  },
  {
    "url": "assets/img/f61b5419-c94a-4df1-8d4d-aed9ae8cc6d5.d386ee48.png",
    "revision": "d386ee4801e75e52204c52477df4b2d5"
  },
  {
    "url": "assets/img/f7c1fea2-c1e7-4d31-94b5-0d9df85e093c.a96df49f.gif",
    "revision": "a96df49f4f3c3da742d2bf6172cbf511"
  },
  {
    "url": "assets/img/f9978fa6-9f49-4a0f-8540-02d269ac448f.202678c6.png",
    "revision": "202678c69db1e18da6f343bc4c844e14"
  },
  {
    "url": "assets/img/f99ee771-c56f-47fb-9148-c0036695b5fe.c9af962c.jpg",
    "revision": "c9af962cce82b1688975969d37b10f6c"
  },
  {
    "url": "assets/img/fb44307f-8e98-4ff7-a918-31dacfa564b4.4a00728b.jpg",
    "revision": "4a00728bf98524731bec77f8cce5fd33"
  },
  {
    "url": "assets/img/fcc941ec-134b-4dcd-bc86-1702fd305300.ababe5c1.gif",
    "revision": "ababe5c10ce5c1db688dd9ce264acb3a"
  },
  {
    "url": "assets/img/flex-item.e88d6f97.jpg",
    "revision": "e88d6f976ee5b0ea0ff2e5da8d392035"
  },
  {
    "url": "assets/img/flex-wrap.08ef17b5.jpg",
    "revision": "08ef17b543a5a55dcd77b9091407a132"
  },
  {
    "url": "assets/img/flex0.6a95a7f0.jpg",
    "revision": "6a95a7f098e4364dc0084e6a5e5fa0db"
  },
  {
    "url": "assets/img/git-areas.6f7a9afa.png",
    "revision": "6f7a9afa9058dfeea8e33240b34b1355"
  },
  {
    "url": "assets/img/git-branch-merge.d8736122.png",
    "revision": "d8736122dd3d558b7465777b6dab88ca"
  },
  {
    "url": "assets/img/git-branch.3554acad.png",
    "revision": "3554acad6793f5269b4c651589aeed1d"
  },
  {
    "url": "assets/img/git-rebase.02d28458.png",
    "revision": "02d28458acae2eb95486fea610ee90b5"
  },
  {
    "url": "assets/img/git-reset-checkout.0c12d0a8.png",
    "revision": "0c12d0a8890d9cc8ba387e8bf33b6516"
  },
  {
    "url": "assets/img/grid-align.8843c2d8.jpg",
    "revision": "8843c2d87579b401bc9b897a6c76a707"
  },
  {
    "url": "assets/img/grid.5a6926f9.jpg",
    "revision": "5a6926f963b24d0928ff3c83f3a1f6b8"
  },
  {
    "url": "assets/img/GUID_Partition_Table_Scheme.svg.3206264f.png",
    "revision": "3206264fe6c6c261e8fc0c6008627f5f"
  },
  {
    "url": "assets/img/How-HTTPS-Works.2de21035.png",
    "revision": "2de21035db40e031598347202665b0ce"
  },
  {
    "url": "assets/img/html-parase.3eb44c71.png",
    "revision": "3eb44c711f810178213693b8a7980299"
  },
  {
    "url": "assets/img/HTTP_RequestMessageExample.a7d09052.png",
    "revision": "a7d09052baf0c53c029c3dd961111505"
  },
  {
    "url": "assets/img/HTTP_ResponseMessageExample.41b72360.png",
    "revision": "41b723609ccd64ed3f9f54d73ea179c8"
  },
  {
    "url": "assets/img/http-tls.b17df166.jpg",
    "revision": "b17df166cf51ab0a294c481569ec222b"
  },
  {
    "url": "assets/img/image-20191130164425351.8f94bb44.png",
    "revision": "8f94bb4427691a32e80cd3b9d60bb53c"
  },
  {
    "url": "assets/img/image-20191207210437023.1e7c216d.png",
    "revision": "1e7c216d3e8426ecbf0f37771b09aa17"
  },
  {
    "url": "assets/img/image-20191207214442687.2c9f6cf1.png",
    "revision": "2c9f6cf11138ddbc880cb89fba923e00"
  },
  {
    "url": "assets/img/image-20191207220440451.14bbbcce.png",
    "revision": "14bbbcce145e1c13ecd086fee2276f13"
  },
  {
    "url": "assets/img/image-20191207220831843.4e6ea415.png",
    "revision": "4e6ea4157f795d2583d72e359b832618"
  },
  {
    "url": "assets/img/image-20191207221313819.26a06bad.png",
    "revision": "26a06bad226961e1214aff908ebe01db"
  },
  {
    "url": "assets/img/image-20191207221744244.476d0dbe.png",
    "revision": "476d0dbe15e4718b9fd37f33f50a580a"
  },
  {
    "url": "assets/img/image-20191207221920368.6722915a.png",
    "revision": "6722915af752f61aed709ed72474841e"
  },
  {
    "url": "assets/img/image-20191207222102010.81bbed7c.png",
    "revision": "81bbed7cb2b8fea3834125f60cd39a9e"
  },
  {
    "url": "assets/img/image-20191207222134306.d2cb7642.png",
    "revision": "d2cb764243b85e14fdea0bec365a8c12"
  },
  {
    "url": "assets/img/image-20191207222237925.c4e06159.png",
    "revision": "c4e061594813f3bd58e8575da1baf133"
  },
  {
    "url": "assets/img/image-20191208171445674.aa5f9eac.png",
    "revision": "aa5f9eac7569ffa7b0bff1a097f4e662"
  },
  {
    "url": "assets/img/image-20191208204118932.11e20472.png",
    "revision": "11e2047273f53486938adf904e3cceeb"
  },
  {
    "url": "assets/img/image-20191208220948084.4332dea8.png",
    "revision": "4332dea86a15b2707603c6870c6f05a9"
  },
  {
    "url": "assets/img/image-20191208224757855.3f69eed5.png",
    "revision": "3f69eed5ffbf88f9f371e0e6de674a14"
  },
  {
    "url": "assets/img/image-20191208225301973.2e140dd0.png",
    "revision": "2e140dd0af081f337f95e0a46c31a138"
  },
  {
    "url": "assets/img/image-20191208232221265.062048a6.png",
    "revision": "062048a6c1947e278e8bac4e827d4a47"
  },
  {
    "url": "assets/img/image-20191208233940066.1ee90493.png",
    "revision": "1ee90493632945815cd2150128be3e66"
  },
  {
    "url": "assets/img/image-20191208234948205.473084c1.png",
    "revision": "473084c1faee614f19b67354121dcf53"
  },
  {
    "url": "assets/img/image-20191208235258643.5b31cf98.png",
    "revision": "5b31cf98e9534a2793fd1f72fe7d9421"
  },
  {
    "url": "assets/img/image-20191209001038024.033c979e.png",
    "revision": "033c979e94277df59d4cf291fd7ab001"
  },
  {
    "url": "assets/img/image-20191209002818626.b78e18af.png",
    "revision": "b78e18afc6a1fa81ff096f56f967a8af"
  },
  {
    "url": "assets/img/image-20191209003453268.a76d2392.png",
    "revision": "a76d2392e1c2331273e557a279e9043e"
  },
  {
    "url": "assets/img/image-20191210004132894.90a7dba7.png",
    "revision": "90a7dba781754b861bdb745287fb181e"
  },
  {
    "url": "assets/img/image-20191212011250613.70ddce92.png",
    "revision": "70ddce92d6d6893339adaf72f2bf91d4"
  },
  {
    "url": "assets/img/image-20191212011410374.cd8d4c18.png",
    "revision": "cd8d4c18c4b50684888c464ae503ebaa"
  },
  {
    "url": "assets/img/image-20191212011747967.44efc7a1.png",
    "revision": "44efc7a1e8cda842239fea2530bc8a53"
  },
  {
    "url": "assets/img/inode_with_signatures.6a497c68.jpg",
    "revision": "6a497c680ed6df8b77c83b76e8772675"
  },
  {
    "url": "assets/img/js_load.909c198b.png",
    "revision": "909c198b7ef020ad8529cfa97f4ffd6f"
  },
  {
    "url": "assets/img/js-event-task.65dc91d8.png",
    "revision": "65dc91d8398830e9ee94df8cca81066a"
  },
  {
    "url": "assets/img/js-extend.cff66ffb.jpg",
    "revision": "cff66ffb4b8b87fc5291e24499392ff5"
  },
  {
    "url": "assets/img/js-proto-layout.77f750f2.png",
    "revision": "77f750f2d8db3ea5120daae3c3d8eb56"
  },
  {
    "url": "assets/img/js-task.4195df67.png",
    "revision": "4195df679aa0dc3f2f7f8b5e023cdf30"
  },
  {
    "url": "assets/img/linux-filesystem.bee94538.png",
    "revision": "bee94538cf084ef7522069597a772def"
  },
  {
    "url": "assets/img/margin.e44310b4.png",
    "revision": "e44310b4ba9321ff29f9f348207805a5"
  },
  {
    "url": "assets/img/master-slave-proxy.077ac719.png",
    "revision": "077ac71910b1c1e212ab8b92df465c6e"
  },
  {
    "url": "assets/img/master-slave.c5e66808.png",
    "revision": "c5e66808c1b34395e8a06b25f5ded53c"
  },
  {
    "url": "assets/img/modal-list.331afd6e.jpg",
    "revision": "331afd6efb03b280c099f0cc7203a3d5"
  },
  {
    "url": "assets/img/mood-form.8ee865b6.jpg",
    "revision": "8ee865b6cec44ec2bee304c0512fff56"
  },
  {
    "url": "assets/img/mvc.fdbaa388.png",
    "revision": "fdbaa38859afead9a8680a6810627d1f"
  },
  {
    "url": "assets/img/mvvm.b1973f93.png",
    "revision": "b1973f93adba97ef8f84be2922b712a4"
  },
  {
    "url": "assets/img/Network_GBN-action.172d0530.png",
    "revision": "172d053019aa7d71b0b5c156c18d7eb5"
  },
  {
    "url": "assets/img/network-of-networks.10dfc657.gif",
    "revision": "10dfc6578d149003adc0f091cb087e08"
  },
  {
    "url": "assets/img/nginx2flask.123d611c.jpg",
    "revision": "123d611cd739011e5c26d1e8f72c7d66"
  },
  {
    "url": "assets/img/noun-kind1.49518467.jpg",
    "revision": "4951846798f636b61e007884e2ffeec6"
  },
  {
    "url": "assets/img/noun-kind2.64106fe0.jpg",
    "revision": "64106fe0764296e73322fc8a9dae0d43"
  },
  {
    "url": "assets/img/noun-the-pos.b0df7d0c.jpg",
    "revision": "b0df7d0c23b3a4edd8642a8754d9033c"
  },
  {
    "url": "assets/img/oddevenlist.353f6608.png",
    "revision": "353f660862dbe6be9a1e5f350da375fb"
  },
  {
    "url": "assets/img/Partition2.269e111e.png",
    "revision": "269e111effc46cb5dd73135670394834"
  },
  {
    "url": "assets/img/PPjwP.118d84b4.png",
    "revision": "118d84b4bc7e732e5592961c122c25da"
  },
  {
    "url": "assets/img/preposition.25033d22.jpg",
    "revision": "25033d22a63875c90bb7a506c1b949fa"
  },
  {
    "url": "assets/img/ProcessRelated.a1d8e2a1.png",
    "revision": "a1d8e2a1982774ca8f6c4ef4f80a3c97"
  },
  {
    "url": "assets/img/ProcessState.36bc1559.png",
    "revision": "36bc1559611b05e9549101ed5fd512ab"
  },
  {
    "url": "assets/img/program-link.829f7b1c.jpg",
    "revision": "829f7b1c4af131f6b5488d14884a5220"
  },
  {
    "url": "assets/img/program-works.7eaa3861.jpg",
    "revision": "7eaa38613e33e5b97de0a77c8b3007aa"
  },
  {
    "url": "assets/img/prototype1.8c492365.png",
    "revision": "8c492365707ecf63c2ed663ec7d2b26c"
  },
  {
    "url": "assets/img/pygc1.0d507109.jpg",
    "revision": "0d5071093adaa02bc03fa3dfd91aa5bc"
  },
  {
    "url": "assets/img/pygc2.d7314ead.jpg",
    "revision": "d7314ead6b303f08a91687577c045585"
  },
  {
    "url": "assets/img/pygc3.510f4d2d.jpg",
    "revision": "510f4d2d37aabdbc8978d9e47630237d"
  },
  {
    "url": "assets/img/pygc4.6fd40c05.jpg",
    "revision": "6fd40c055a6633c654acaf05f472c1b2"
  },
  {
    "url": "assets/img/reverseLink.b5068ec1.png",
    "revision": "b5068ec1a7088c2c8b60812bf95d9264"
  },
  {
    "url": "assets/img/sentence-negative.084fdb16.jpg",
    "revision": "084fdb16f7e8c39bd45e5a66f27f1e98"
  },
  {
    "url": "assets/img/shared_ptr.395148b6.jpg",
    "revision": "395148b6daddc13a006bf53fac3f2186"
  },
  {
    "url": "assets/img/skiplist.01da932c.png",
    "revision": "01da932c2fc6f96c4433affe516ea566"
  },
  {
    "url": "assets/img/sortcolors.2ea3ac45.png",
    "revision": "2ea3ac45dbc284022183402e3562b454"
  },
  {
    "url": "assets/img/sql-ranking.7342fcbb.jpg",
    "revision": "7342fcbb9b53fec8785d65907336131a"
  },
  {
    "url": "assets/img/steps.0a91c6d3.jpg",
    "revision": "0a91c6d34132239201585c4713382f95"
  },
  {
    "url": "assets/img/style.82ae1c6c.png",
    "revision": "82ae1c6c40206b16144c1d94106522cb"
  },
  {
    "url": "assets/img/sun.896a044e.png",
    "revision": "896a044ebadc680c899613f7ce3d4057"
  },
  {
    "url": "assets/img/tense-list.c71873f6.jpg",
    "revision": "c71873f6cdd398458f2587be0597cf8b"
  },
  {
    "url": "assets/img/tGPV0.4cf15f1e.png",
    "revision": "4cf15f1ee5f507f7a4beda2b8703d7ff"
  },
  {
    "url": "assets/img/to-aspect.4d982cd4.jpg",
    "revision": "4d982cd468f7222c7e811251fca9544b"
  },
  {
    "url": "assets/img/transform.5e4c54c0.jpg",
    "revision": "5e4c54c024387f4c6517dc20600591fc"
  },
  {
    "url": "assets/img/u4E0B_u8F7D.b26ab2b1.png",
    "revision": "b26ab2b1961d3d5ec274e95d21b85700"
  },
  {
    "url": "assets/img/uglynum.ab587460.png",
    "revision": "ab5874600f058b00adb89332e2cdf9e6"
  },
  {
    "url": "assets/img/verb-auxility.de176f8c.jpg",
    "revision": "de176f8c8a654101fb68db294af0096d"
  },
  {
    "url": "assets/img/view-model.0c8d5132.png",
    "revision": "0c8d513270ba7f1be355b8a8f18a6865"
  },
  {
    "url": "assets/img/vue-array-bind.5dbf0e84.jpg",
    "revision": "5dbf0e84abaa4a79fa2f05dafa61bd27"
  },
  {
    "url": "assets/img/vue-binding.5de7af21.png",
    "revision": "5de7af21d4c2de951720c006f84b98fc"
  },
  {
    "url": "assets/img/vue-computed.e7e4816e.jpg",
    "revision": "e7e4816e8f87d60d8fe5ab56cc48f109"
  },
  {
    "url": "assets/img/vue-data-bind.1ff4e0c7.jpg",
    "revision": "1ff4e0c7fc11396a483bc2a59fb447bb"
  },
  {
    "url": "assets/img/vue-lifecycle.564f2064.png",
    "revision": "564f2064aa6e63ee05ec67aba85d663b"
  },
  {
    "url": "assets/img/vue-make-path.3aefef41.jpg",
    "revision": "3aefef4173ad5dbf66936773e17c712f"
  },
  {
    "url": "assets/img/vue3-effect-deps.e578e356.jpeg",
    "revision": "e578e356834f65260ef12396d6dcd429"
  },
  {
    "url": "assets/img/vue3-obj-collect.adb97d04.jpeg",
    "revision": "adb97d0473db1934c9b160aae2cc51e0"
  },
  {
    "url": "assets/img/web-page-fid.1d38500e.svg",
    "revision": "1d38500ea37cf1190208bf129b7e65de"
  },
  {
    "url": "assets/img/web-page-lcp.cdda224f.png",
    "revision": "cdda224f1c0f68858373a5a75d8debe0"
  },
  {
    "url": "assets/img/web-page-timing.1016c5e3.png",
    "revision": "1016c5e393de57b7d8e5f8fc6be19cc2"
  },
  {
    "url": "assets/js/1.8523ee37.js",
    "revision": "850395401dc4a4b8b9ac5277d1efee0c"
  },
  {
    "url": "assets/js/10.32883aa8.js",
    "revision": "acf8774eb28a20adcd2f3d4dc9b45574"
  },
  {
    "url": "assets/js/100.47aff18c.js",
    "revision": "4885c787b94232d023b7a6aeca692176"
  },
  {
    "url": "assets/js/101.6f94fd67.js",
    "revision": "fe9d3f7eab27ff8c59fb17bb85123746"
  },
  {
    "url": "assets/js/102.63e349f6.js",
    "revision": "ed7d65496f7f1d89f4bcd0b19787182f"
  },
  {
    "url": "assets/js/103.0c119be8.js",
    "revision": "f9f591dda5c4db201ac85db4a5d81e6b"
  },
  {
    "url": "assets/js/104.6fc3c561.js",
    "revision": "fb319a643a17f798f076f41de0e6dd20"
  },
  {
    "url": "assets/js/105.5707b172.js",
    "revision": "427e44de30a6fcad999a8e8b197f52c1"
  },
  {
    "url": "assets/js/106.b1105379.js",
    "revision": "ba147dc83dea549e12c323ff6f9e6200"
  },
  {
    "url": "assets/js/107.82aff42b.js",
    "revision": "45a07d8d15ba699787e5167139eaab1f"
  },
  {
    "url": "assets/js/108.5bdfa9f5.js",
    "revision": "0710058452c277e21d2a5fe7ccf16e72"
  },
  {
    "url": "assets/js/109.cbe46220.js",
    "revision": "3cc2c3a524b5143f3256eb6aabb75de0"
  },
  {
    "url": "assets/js/11.c69a55d7.js",
    "revision": "0c026978b51d0ef8a38f5c196789bb62"
  },
  {
    "url": "assets/js/110.58b4ead7.js",
    "revision": "828f9276669d80e5556b38bd0e8507f8"
  },
  {
    "url": "assets/js/111.f4eb247c.js",
    "revision": "531c7c433e23146cf4149c565040bebe"
  },
  {
    "url": "assets/js/112.5ca66cc9.js",
    "revision": "587e6a2781fe2b70a306cbb2c17c3588"
  },
  {
    "url": "assets/js/113.217e1357.js",
    "revision": "87114077a64077d1482724280640baeb"
  },
  {
    "url": "assets/js/114.aed432c6.js",
    "revision": "47143456634c2b16903c9b8ed9a614a7"
  },
  {
    "url": "assets/js/115.ab06b80f.js",
    "revision": "52ba599c06f730b437539af648165210"
  },
  {
    "url": "assets/js/116.82f1127c.js",
    "revision": "6e8421167bd813cc424a70bee8e829f4"
  },
  {
    "url": "assets/js/117.a9c74b61.js",
    "revision": "90a4a90c899c83a7a87605ab7717deb2"
  },
  {
    "url": "assets/js/118.b9f033a7.js",
    "revision": "7d33bb2b3dbd02410f1bccecc47a531b"
  },
  {
    "url": "assets/js/119.83aae855.js",
    "revision": "714ae854b83f198d3e72dca632dba212"
  },
  {
    "url": "assets/js/12.2c63c420.js",
    "revision": "7e999677a1b3efc08fc45223f0f66ee7"
  },
  {
    "url": "assets/js/120.791b24f7.js",
    "revision": "a57ce608c1cf907b679de06ac57a2a06"
  },
  {
    "url": "assets/js/121.955bc348.js",
    "revision": "d71fd200b50d56664c3c585e3558ce8e"
  },
  {
    "url": "assets/js/122.80fca185.js",
    "revision": "8ca0bef040099da10fbe8724ef31edb8"
  },
  {
    "url": "assets/js/123.4a6d9a28.js",
    "revision": "d150af551aede3316cdbe1269f6786d5"
  },
  {
    "url": "assets/js/124.44ad5ec5.js",
    "revision": "f00646bb4b57a76a2ddc9c31562f4b81"
  },
  {
    "url": "assets/js/125.d237f73e.js",
    "revision": "af3c606e47d54e827426b0061036d413"
  },
  {
    "url": "assets/js/126.499c9e29.js",
    "revision": "1be5b11415bc8df5d04ab7ca6f62bcfe"
  },
  {
    "url": "assets/js/127.01f619a8.js",
    "revision": "2aa6433de28306cae6e9dc2dc12f8118"
  },
  {
    "url": "assets/js/128.05bb618f.js",
    "revision": "4c418ed9ea0e636900828a0a0526123d"
  },
  {
    "url": "assets/js/129.158851a7.js",
    "revision": "3e066a7c19e8d732c1a45eb5970b4a47"
  },
  {
    "url": "assets/js/13.841cf452.js",
    "revision": "94f7bb3b15b4ce4e52b9591424633ed5"
  },
  {
    "url": "assets/js/130.09e028d9.js",
    "revision": "7b45262d625d79b8a0fd0f15c3c9e720"
  },
  {
    "url": "assets/js/131.1365c9a1.js",
    "revision": "557a19c6aa72cbae766075696600f897"
  },
  {
    "url": "assets/js/132.a47deb11.js",
    "revision": "2e2ef8575b401de87628eccf43c30dc8"
  },
  {
    "url": "assets/js/133.a75590c9.js",
    "revision": "74a0670a04a191aedd1bec86dc06a210"
  },
  {
    "url": "assets/js/134.c34e762c.js",
    "revision": "858857ca5942d1b257086d3afc2b12c7"
  },
  {
    "url": "assets/js/135.8b3cba68.js",
    "revision": "d655ecff83bb326bf2b8439df309e4a5"
  },
  {
    "url": "assets/js/136.e545f43a.js",
    "revision": "4d5bd192135fec21b3ee6d09efeabd8a"
  },
  {
    "url": "assets/js/137.c20528c9.js",
    "revision": "94e7c823b245f7c555f06ae69ed8416a"
  },
  {
    "url": "assets/js/138.f08aee7c.js",
    "revision": "0cd9b9ab0a5a356389131ba1f483cedd"
  },
  {
    "url": "assets/js/139.4cfced21.js",
    "revision": "8c85f05ea2075bd071541d21288c4783"
  },
  {
    "url": "assets/js/14.c8ad3699.js",
    "revision": "f56a834451dc8c924ee86d5bad0089c2"
  },
  {
    "url": "assets/js/140.bb37b4e1.js",
    "revision": "fd378e8999375e356797031a3d4fdf64"
  },
  {
    "url": "assets/js/141.b99bfec8.js",
    "revision": "8a62fb58e79d59d015f69d2322812c97"
  },
  {
    "url": "assets/js/142.ed5a7351.js",
    "revision": "418ff0c44320b5418ccca15e5fffd14b"
  },
  {
    "url": "assets/js/143.5c89221d.js",
    "revision": "680cb6b342aeb7291b758bf3d666bbe6"
  },
  {
    "url": "assets/js/144.c8807a37.js",
    "revision": "d65d95d5127b64eb8adffa934a9709d3"
  },
  {
    "url": "assets/js/145.8d3dc1ca.js",
    "revision": "613ceca3a18d0fd6aac68277312c7c61"
  },
  {
    "url": "assets/js/146.b6d33ac5.js",
    "revision": "28161d05b1e6503f0b8f0c85b423f053"
  },
  {
    "url": "assets/js/147.ba5c0dbf.js",
    "revision": "a251103f5903674f534c5cd94fd43aa1"
  },
  {
    "url": "assets/js/148.36255cdb.js",
    "revision": "c783235ea78bd4f2cb8735d1860477cb"
  },
  {
    "url": "assets/js/149.c5aecbdc.js",
    "revision": "083de3510ba562b2d4ea9fa35d23f342"
  },
  {
    "url": "assets/js/15.cb654472.js",
    "revision": "f77024f8539cf2f95a5e14c644661b03"
  },
  {
    "url": "assets/js/150.4d31f30a.js",
    "revision": "529a8bafb1de202c1dd89817a139ddbd"
  },
  {
    "url": "assets/js/151.350f38b6.js",
    "revision": "7a02cf0790f442f595347759add892d7"
  },
  {
    "url": "assets/js/152.c27bc5a6.js",
    "revision": "aaf50fd5d6dc6fdc06a5a02ac662320c"
  },
  {
    "url": "assets/js/153.d2b7f1e0.js",
    "revision": "caf8db76c19467b37573589eb3385735"
  },
  {
    "url": "assets/js/154.34ef0e90.js",
    "revision": "e606b6019eb54e74f187dde10888cfc0"
  },
  {
    "url": "assets/js/155.222d0e15.js",
    "revision": "160b865bb97f72ac81b6f78c23e015e3"
  },
  {
    "url": "assets/js/156.1c7e06bc.js",
    "revision": "d795b32092399ca8a9c04b8e856bfef1"
  },
  {
    "url": "assets/js/157.6880daec.js",
    "revision": "27b7d4c3d57064c38865ecd352ff6706"
  },
  {
    "url": "assets/js/158.aa005e16.js",
    "revision": "0026c60687f2b8371ff1f6b2432928e2"
  },
  {
    "url": "assets/js/159.d0b5046d.js",
    "revision": "53989d9f94a00988a2434af555c65c3f"
  },
  {
    "url": "assets/js/16.02b4de5d.js",
    "revision": "8710ad2fc6410a42a7657e5bc3cd4d70"
  },
  {
    "url": "assets/js/160.3c08cca7.js",
    "revision": "3ce56c15d7607b4767fda5a653fed254"
  },
  {
    "url": "assets/js/161.79093f41.js",
    "revision": "005aea5b0cf0922dec7dc89136ccf29b"
  },
  {
    "url": "assets/js/162.84bddd7a.js",
    "revision": "0a9c75228ee349a5d670e6ca442c304c"
  },
  {
    "url": "assets/js/163.83059278.js",
    "revision": "555ab951858079a51c92f299af60d8ed"
  },
  {
    "url": "assets/js/164.26d4d87b.js",
    "revision": "8f4683029d0915070eef6b46b0021e3e"
  },
  {
    "url": "assets/js/165.4758b6db.js",
    "revision": "9b7fdaec785adc7436601c361ba8439e"
  },
  {
    "url": "assets/js/166.1d577c5b.js",
    "revision": "ad858afacad8198316d3fa81e1261372"
  },
  {
    "url": "assets/js/167.f83e55bb.js",
    "revision": "1760dc0e3509d476aacede82f57b7006"
  },
  {
    "url": "assets/js/168.07e4c4bc.js",
    "revision": "25fcd0c2fce25a59a6a099b39d5f6864"
  },
  {
    "url": "assets/js/169.e1f8f121.js",
    "revision": "96c877e3f0b3f316a21ea907a142891d"
  },
  {
    "url": "assets/js/17.89379647.js",
    "revision": "be28a1fccbc0f7134b7f584264a305fe"
  },
  {
    "url": "assets/js/170.64d1befe.js",
    "revision": "d64c4bddbb844a0f7ad007ed054e4ea6"
  },
  {
    "url": "assets/js/171.a7e83357.js",
    "revision": "e7e5e9a974361959bb0c985e9e088fed"
  },
  {
    "url": "assets/js/172.a8aede98.js",
    "revision": "8e457c18aba5a0b7234494d7ee270ac6"
  },
  {
    "url": "assets/js/173.d3883e9e.js",
    "revision": "296b7b000cbaa2d843af11ddd78cef98"
  },
  {
    "url": "assets/js/174.9e3e58f9.js",
    "revision": "0dbe44e65f20b81a9ecddc2f2ae2500e"
  },
  {
    "url": "assets/js/175.f0ee553a.js",
    "revision": "f936a14c25eb49aee6ec359a6825dd95"
  },
  {
    "url": "assets/js/176.14a6e50e.js",
    "revision": "b0f8fe586925fe0168d555e9453d2745"
  },
  {
    "url": "assets/js/177.09cf41c6.js",
    "revision": "72df72a3b4a7db9779fc3593f5ed508f"
  },
  {
    "url": "assets/js/178.81c216ec.js",
    "revision": "41ae3a14aededbd321c27f5db1a0faee"
  },
  {
    "url": "assets/js/179.02d5bc9c.js",
    "revision": "706305800bd8d1acc3574fe1962a26a9"
  },
  {
    "url": "assets/js/18.dd68ac31.js",
    "revision": "23325d8a8458519e8b1eaf4efa036eb6"
  },
  {
    "url": "assets/js/180.97c74fdd.js",
    "revision": "d4fce70ac7dc6ea4743f967a0a43f153"
  },
  {
    "url": "assets/js/181.ed709f81.js",
    "revision": "4c58fe5690975bea84d67a5c4fc54365"
  },
  {
    "url": "assets/js/182.cd2404ef.js",
    "revision": "a55c935e943d0a970f4a66c42bc9ca58"
  },
  {
    "url": "assets/js/183.63ac7132.js",
    "revision": "e6cfe28b50e7ffb718ea243f8124d497"
  },
  {
    "url": "assets/js/184.f7e32a93.js",
    "revision": "1f284309fcfaa0206274cdf4d77926ce"
  },
  {
    "url": "assets/js/185.1728b8ee.js",
    "revision": "b9601d6d62e4d13be994f248324a12d3"
  },
  {
    "url": "assets/js/186.117e7448.js",
    "revision": "73c7b21eaadea2981728ef2b24f1fcdb"
  },
  {
    "url": "assets/js/187.ed61d9a3.js",
    "revision": "d97a25b88ae00f7caa5ee0b70735fa2b"
  },
  {
    "url": "assets/js/188.baaa5101.js",
    "revision": "368737375459b418fb6ef0de412c9241"
  },
  {
    "url": "assets/js/189.a0809b62.js",
    "revision": "e05a6dddc59ba323c206150aaceb5485"
  },
  {
    "url": "assets/js/19.40ad7a72.js",
    "revision": "28e5d83326e0baee06385019ffe2f958"
  },
  {
    "url": "assets/js/190.0c878c19.js",
    "revision": "24937ee9a6406abab757f2ced6c5616b"
  },
  {
    "url": "assets/js/191.cca9bba6.js",
    "revision": "11586215f3379e4ce110355878bcc919"
  },
  {
    "url": "assets/js/192.7455b72f.js",
    "revision": "7eecf237a3cde3dafa7ab0d0e05e5c90"
  },
  {
    "url": "assets/js/193.43d849df.js",
    "revision": "fd2dd3d0895ad20cb8d9bd74f53b8910"
  },
  {
    "url": "assets/js/194.84fb0fd0.js",
    "revision": "199c32a7a40083c478efed7fcc6f08cc"
  },
  {
    "url": "assets/js/195.3894a12f.js",
    "revision": "c9d324d9f285870a49cfcfe9fd25e29d"
  },
  {
    "url": "assets/js/196.8dd7496f.js",
    "revision": "7673f5cbb52aca2dc20d4383778cf9da"
  },
  {
    "url": "assets/js/197.5b38719a.js",
    "revision": "07d58d171885265c399d69abfd51ff7b"
  },
  {
    "url": "assets/js/198.98088150.js",
    "revision": "5e035c63fb99b58e48254ae1cd3355d0"
  },
  {
    "url": "assets/js/199.a3023965.js",
    "revision": "0ec02e0201c76e8576db15728602f535"
  },
  {
    "url": "assets/js/2.3e9bd703.js",
    "revision": "c5807200ef95c20946f3d43b034cd815"
  },
  {
    "url": "assets/js/20.b6490acc.js",
    "revision": "f9431e89a6a7f067b04d3a8e174dc1ee"
  },
  {
    "url": "assets/js/200.460b1710.js",
    "revision": "e46bbd29bbf0b281eb0f53aecdcc29eb"
  },
  {
    "url": "assets/js/201.02d12dae.js",
    "revision": "a7ce573369a7f722c53c2eba8b1c0567"
  },
  {
    "url": "assets/js/202.ca90bc4d.js",
    "revision": "6639d84f32d63fb2e9ac0316ebcc8c9d"
  },
  {
    "url": "assets/js/203.29edec84.js",
    "revision": "22631e853d6614ca0688881e0c38eb66"
  },
  {
    "url": "assets/js/204.a34c59f0.js",
    "revision": "440eede416f5b5c2f2617e3f5928485b"
  },
  {
    "url": "assets/js/205.28e54ad3.js",
    "revision": "a200ce96344c64d62a35d9f704fb857b"
  },
  {
    "url": "assets/js/206.86a8fcb6.js",
    "revision": "9cf2ae157514fd4cbe02b96f478c8d36"
  },
  {
    "url": "assets/js/207.2b25fb80.js",
    "revision": "858bb8d8405dfff42bc571079e27045b"
  },
  {
    "url": "assets/js/208.19e2f4ef.js",
    "revision": "1364f3212982b8f1f99ba9d74f40ec7d"
  },
  {
    "url": "assets/js/209.d35277e5.js",
    "revision": "f2427635d3d735cfd02f31ac4b08d7c8"
  },
  {
    "url": "assets/js/21.892e8b12.js",
    "revision": "f52f36318556fa4d5431b23d81ab685a"
  },
  {
    "url": "assets/js/210.b6450a17.js",
    "revision": "effacb39fef4a7c9188467e33049ee99"
  },
  {
    "url": "assets/js/211.05d3e5ca.js",
    "revision": "aa02e6e5c5ac289f5f297445e0d5a603"
  },
  {
    "url": "assets/js/212.c0c19433.js",
    "revision": "2ddd384b71def38868a2c06598195f8c"
  },
  {
    "url": "assets/js/213.e757ed51.js",
    "revision": "255d9bb688363906dfbee4cc1ec77eed"
  },
  {
    "url": "assets/js/214.1b718aa2.js",
    "revision": "b1fbfc05029f66862f07fb7d5646a474"
  },
  {
    "url": "assets/js/215.1b06f405.js",
    "revision": "175a4ec5d651ef66875639afb470bd99"
  },
  {
    "url": "assets/js/216.3e1833c7.js",
    "revision": "6b7113f5db7ccc0c892a20b209e37cbc"
  },
  {
    "url": "assets/js/217.e7a072f5.js",
    "revision": "a34b548bc38eb715c43584d31d8be42d"
  },
  {
    "url": "assets/js/218.72fc84c9.js",
    "revision": "41b37b48e5a5d3601798cb2da81ba24c"
  },
  {
    "url": "assets/js/219.4da45525.js",
    "revision": "b54eb9cf5d022b1eb8b42a7d01beecd1"
  },
  {
    "url": "assets/js/22.de9c1836.js",
    "revision": "b79d427a27ba932d6e89b5a1a7f2b2f0"
  },
  {
    "url": "assets/js/220.4f40e613.js",
    "revision": "71528f5eba270369a1a07cfb2b607984"
  },
  {
    "url": "assets/js/221.288a11dd.js",
    "revision": "ddb4e24d3632165483e9db1a456a14c0"
  },
  {
    "url": "assets/js/222.06a633fb.js",
    "revision": "7eb103fc27ee4742e92a19c24240f9d4"
  },
  {
    "url": "assets/js/223.55673671.js",
    "revision": "62aa8bd91c9a5f7f5e961a5c3b03146a"
  },
  {
    "url": "assets/js/224.a8d93524.js",
    "revision": "df0134c0db1db52f7a539b3631573689"
  },
  {
    "url": "assets/js/225.a2369cb3.js",
    "revision": "d0cd78a082f83042334e1827041d8e3e"
  },
  {
    "url": "assets/js/226.cebc6195.js",
    "revision": "396dcfe623c79bbbe1078ac6b76068d6"
  },
  {
    "url": "assets/js/227.fb840c62.js",
    "revision": "4837fd5bb1a56c089b7fe8b78148104c"
  },
  {
    "url": "assets/js/228.763e0f68.js",
    "revision": "39de26e2062768a09a7a2a1313b1d4b7"
  },
  {
    "url": "assets/js/229.0d7bf716.js",
    "revision": "fb9ba659467700c2cdfe07be62d7027e"
  },
  {
    "url": "assets/js/23.e3081dc6.js",
    "revision": "57e4e8883d9b58036aa37c3bf90fcbfd"
  },
  {
    "url": "assets/js/230.08605b03.js",
    "revision": "7c47d8958d5dee301b4946d3dbe47e5d"
  },
  {
    "url": "assets/js/231.5f3cdeee.js",
    "revision": "d3220176a9061a31af49dd1b4d9ef024"
  },
  {
    "url": "assets/js/232.d51ae093.js",
    "revision": "6564c3cd9b330ac3b6c1a89093e9890c"
  },
  {
    "url": "assets/js/233.447a2df2.js",
    "revision": "a90648c00bb5f43ebb7ea0b7a578f946"
  },
  {
    "url": "assets/js/234.a78235ff.js",
    "revision": "6cf58442752418a2b0ac40d1d227195a"
  },
  {
    "url": "assets/js/235.eaccae57.js",
    "revision": "66c24876352182ed5020ca764178cd47"
  },
  {
    "url": "assets/js/236.a21af760.js",
    "revision": "c0e2576e2bba53be60e5dcc45c0a694a"
  },
  {
    "url": "assets/js/237.eaa87ec1.js",
    "revision": "5bfa61a6cca40025b6b6b6dd11f3c1d4"
  },
  {
    "url": "assets/js/238.3c33aa3f.js",
    "revision": "463b8feb414069adc3a26e6ad54852f9"
  },
  {
    "url": "assets/js/239.e34bbd2d.js",
    "revision": "98e1e5b30511d5c6307a1aaeea009a50"
  },
  {
    "url": "assets/js/24.ec128075.js",
    "revision": "01961db1aa0f6de63f9b3d65d590cede"
  },
  {
    "url": "assets/js/240.a056aa21.js",
    "revision": "b5e93323b4b44e4eb59efbf590272eb5"
  },
  {
    "url": "assets/js/241.1e43b5f6.js",
    "revision": "c320d823ab06e1d9aa590c3fa8c9e945"
  },
  {
    "url": "assets/js/242.06bf4c9c.js",
    "revision": "19274dd8417a9ef61dca65a93cb13362"
  },
  {
    "url": "assets/js/243.8cb55232.js",
    "revision": "e96a61878d531eb8c4eec6a11e794536"
  },
  {
    "url": "assets/js/244.ac8179aa.js",
    "revision": "71ae6013c5bac04aab11d19fb7b91f04"
  },
  {
    "url": "assets/js/245.247ef538.js",
    "revision": "d44f086302c3561f93d6b703eafabb9b"
  },
  {
    "url": "assets/js/246.3c060de4.js",
    "revision": "450e67f1098b37fae57ded1bae9ad3f6"
  },
  {
    "url": "assets/js/247.5e78aa41.js",
    "revision": "cff301bd454ab6a1d8853f5233490c67"
  },
  {
    "url": "assets/js/248.d63aed18.js",
    "revision": "75e7e6610c0172f24ec79ba4a243218e"
  },
  {
    "url": "assets/js/249.ff94699b.js",
    "revision": "6c0fe878866d2638b12bb12c7faa0b4d"
  },
  {
    "url": "assets/js/25.19e6dd85.js",
    "revision": "5af4f37ea6c819af03ad35c5ecf7a159"
  },
  {
    "url": "assets/js/250.a88205bf.js",
    "revision": "581d7600836f1cb391ab124de5f617fa"
  },
  {
    "url": "assets/js/251.72d3ef6e.js",
    "revision": "ccb9dc14ff7853d0e38e4604cd7887b0"
  },
  {
    "url": "assets/js/252.4ababe3f.js",
    "revision": "82aa4d94af43af6eaabfefa23458d6c0"
  },
  {
    "url": "assets/js/253.88ceeb75.js",
    "revision": "08b1d7528f99f75ec8c180a2b4770897"
  },
  {
    "url": "assets/js/254.5e2e8eda.js",
    "revision": "fe76d0ad2a7a288d394dbb9a2eb74787"
  },
  {
    "url": "assets/js/255.70ed091b.js",
    "revision": "1f6caba6c35cf6a86e1c1e1d3cdf9b1e"
  },
  {
    "url": "assets/js/256.0a28dbbd.js",
    "revision": "40083822740d256d920734303872e992"
  },
  {
    "url": "assets/js/257.edea863f.js",
    "revision": "ff54178f8205f029f3a92357deb6f279"
  },
  {
    "url": "assets/js/258.7647b96b.js",
    "revision": "6bb2b65bf8531cd8a602e7a7f9e547f6"
  },
  {
    "url": "assets/js/259.39b29588.js",
    "revision": "ad20b818a0dd01278327355d90673772"
  },
  {
    "url": "assets/js/26.b523995a.js",
    "revision": "bcf6f89098e00efd30c70b7a9ccd4969"
  },
  {
    "url": "assets/js/260.39140a8f.js",
    "revision": "2685810856163689316a75e2316beba3"
  },
  {
    "url": "assets/js/261.7bfe7fda.js",
    "revision": "3fc0f8ca949c0eb108b333ddec56a769"
  },
  {
    "url": "assets/js/262.1939c210.js",
    "revision": "dfbc33e6c2660ebca990041eb3f46cae"
  },
  {
    "url": "assets/js/263.524775a5.js",
    "revision": "7578b0ec30fe20086ecc4340f58eb1a4"
  },
  {
    "url": "assets/js/264.28932490.js",
    "revision": "f1db3247e21570fa55a49994b1f3d811"
  },
  {
    "url": "assets/js/265.96be11fc.js",
    "revision": "21a23e5006dd5aa05bc3c28827fb0850"
  },
  {
    "url": "assets/js/266.b4a93d73.js",
    "revision": "846c0b63639e69961093f3075acd90c1"
  },
  {
    "url": "assets/js/267.cb76f2c4.js",
    "revision": "69b51835a44fc0f96f85ba566f88e811"
  },
  {
    "url": "assets/js/268.1affcfa5.js",
    "revision": "ff44c5ee4a4f43ac414c552263a2a869"
  },
  {
    "url": "assets/js/269.9dade3ca.js",
    "revision": "f882b8f0947b8a8d6b1d8c141994db5c"
  },
  {
    "url": "assets/js/27.8b557fab.js",
    "revision": "0e9c2ca9c8eb411fccd01a4409d06310"
  },
  {
    "url": "assets/js/270.a8539782.js",
    "revision": "7b063b42f90462c39fb36a87d0981cf6"
  },
  {
    "url": "assets/js/271.dee9e9ca.js",
    "revision": "a6d25ca1ca7b6f0540ea759a5b4d8902"
  },
  {
    "url": "assets/js/272.e53806fe.js",
    "revision": "c24c9a07db8b481210a54a057ead6cd0"
  },
  {
    "url": "assets/js/273.8f889b93.js",
    "revision": "a0175c4935b20ed46205a96b95e8344d"
  },
  {
    "url": "assets/js/28.01444eae.js",
    "revision": "d16cf7cef46df977d761f65724770c9c"
  },
  {
    "url": "assets/js/29.7025c81c.js",
    "revision": "d33938f9e6df9ea82e267d71f4cdf2dd"
  },
  {
    "url": "assets/js/3.eb5de59b.js",
    "revision": "dd09119556c5bb3cbea69950bad6248e"
  },
  {
    "url": "assets/js/30.2f591292.js",
    "revision": "e3851cddd2fb2bb8d8ab669b0c2fb4fa"
  },
  {
    "url": "assets/js/31.cde09b73.js",
    "revision": "804ef35f2dd95183f027127d3a68ea80"
  },
  {
    "url": "assets/js/32.f114be43.js",
    "revision": "74cc7412d80acff8e9cfe47ee4f64c08"
  },
  {
    "url": "assets/js/33.fea06454.js",
    "revision": "2ca01da8950727844d97b11a071ca268"
  },
  {
    "url": "assets/js/34.347bb4ea.js",
    "revision": "3deb68e591f03f2ca1e92043637f0122"
  },
  {
    "url": "assets/js/35.23fdddc3.js",
    "revision": "215efdf7e8c78b5c1360749439717957"
  },
  {
    "url": "assets/js/36.778ef7e7.js",
    "revision": "7e9bcf72c630d4fa510a84618168e56d"
  },
  {
    "url": "assets/js/37.65efbf94.js",
    "revision": "598ce07dafb353e9c4b81e716e6696fe"
  },
  {
    "url": "assets/js/38.4e16d979.js",
    "revision": "7155e52879a610364fc7beed6936e4dd"
  },
  {
    "url": "assets/js/39.71457b14.js",
    "revision": "c2a3909f79cf3fe1561dc6b62a786609"
  },
  {
    "url": "assets/js/40.70448751.js",
    "revision": "d60d6e0d71751e323f9691a92a3348d3"
  },
  {
    "url": "assets/js/41.44984fc5.js",
    "revision": "9eccae5bcc4b153203d6a40668861dd7"
  },
  {
    "url": "assets/js/42.a90af3be.js",
    "revision": "9514497afa277b722b67e75b99fdb41b"
  },
  {
    "url": "assets/js/43.9af31233.js",
    "revision": "830ceeb5a6b6d8dbc1869a4c76fe9dc7"
  },
  {
    "url": "assets/js/44.bc907049.js",
    "revision": "170601b0ab74a419565a76b98b16fc3b"
  },
  {
    "url": "assets/js/45.42637f95.js",
    "revision": "d6ca154dff6716eb0444ae65c9ccef91"
  },
  {
    "url": "assets/js/46.f8429d65.js",
    "revision": "75100d7bbcc09b707a9d3347b95f3d13"
  },
  {
    "url": "assets/js/47.4745eaea.js",
    "revision": "8bff014e7b1593214341613832907c2b"
  },
  {
    "url": "assets/js/48.3ca0d61b.js",
    "revision": "0ee978650b3e8fa0368a55854f17906e"
  },
  {
    "url": "assets/js/49.74b87d99.js",
    "revision": "cfc10197d2ae4274526ae6a0e46a108f"
  },
  {
    "url": "assets/js/5.76ed3ddf.js",
    "revision": "6e9a4a0576e28028ea4db25548396ee7"
  },
  {
    "url": "assets/js/50.68c2ff34.js",
    "revision": "1f0ed4d164661af2c48de300f2598b9e"
  },
  {
    "url": "assets/js/51.3415be90.js",
    "revision": "2cdcb11e54e841c0a4739d3d503d6205"
  },
  {
    "url": "assets/js/52.b683e2e3.js",
    "revision": "8283a61af07737b02934bc8c5d5702db"
  },
  {
    "url": "assets/js/53.652f1d36.js",
    "revision": "94eab446240eed2dc1067ed7bd0ebd2d"
  },
  {
    "url": "assets/js/54.b4656f01.js",
    "revision": "51266bce9a2dfec380b7fd3c6c1d8d26"
  },
  {
    "url": "assets/js/55.a244d751.js",
    "revision": "8813b26c165cc087719234af50418248"
  },
  {
    "url": "assets/js/56.fd885917.js",
    "revision": "67586e16f8a77caededeb58871e3cd7e"
  },
  {
    "url": "assets/js/57.3e2596c9.js",
    "revision": "87447c45cccec1968769bf6794c2a341"
  },
  {
    "url": "assets/js/58.a9ea5503.js",
    "revision": "bdb664f7452462435cc4c0a29c34e0f5"
  },
  {
    "url": "assets/js/59.f92643de.js",
    "revision": "76638756f2a38dd4d5b79d4155872c61"
  },
  {
    "url": "assets/js/6.7f78a350.js",
    "revision": "e1045763bb56dafc8200c0209125f881"
  },
  {
    "url": "assets/js/60.e8a916cb.js",
    "revision": "59f62364904e64fa6f1683454eeb9fbe"
  },
  {
    "url": "assets/js/61.25e577bd.js",
    "revision": "2af415d50abfc65bf0744076666602e0"
  },
  {
    "url": "assets/js/62.5a4f6494.js",
    "revision": "fa5d07fd192fb5bf4dd8430ad15ef7d2"
  },
  {
    "url": "assets/js/63.a563227a.js",
    "revision": "cd720499615f78f98a4b60e8eb1c06c6"
  },
  {
    "url": "assets/js/64.cbeaf576.js",
    "revision": "e1d66998b9d2086fb38b573af16df04e"
  },
  {
    "url": "assets/js/65.ebc6fe3a.js",
    "revision": "760fbed51f3c39c35962dae096357a1c"
  },
  {
    "url": "assets/js/66.a60284cd.js",
    "revision": "a37a355d150ba450dd1ccd7c90d682ee"
  },
  {
    "url": "assets/js/67.bb5344dd.js",
    "revision": "71988806bd609763298e89a1c8d16baa"
  },
  {
    "url": "assets/js/68.1faea673.js",
    "revision": "42f673e88aa6e2aace29eb697c5e3361"
  },
  {
    "url": "assets/js/69.631abd4c.js",
    "revision": "a4e20c83d4ee7b2460b8e14b323957e3"
  },
  {
    "url": "assets/js/7.8e717302.js",
    "revision": "a01ab5537fa77f38ca13de361fe2d3ea"
  },
  {
    "url": "assets/js/70.c45801fb.js",
    "revision": "90b41abda77163f71ff5a61f5e122298"
  },
  {
    "url": "assets/js/71.9080dd8f.js",
    "revision": "b81d94422f428b54d6167ca3929c7c5d"
  },
  {
    "url": "assets/js/72.70b12ca9.js",
    "revision": "1ae878de271f4ccdaf10fe2db50ebfdf"
  },
  {
    "url": "assets/js/73.9baa5323.js",
    "revision": "8e86189988cc43136d8c9141618945ec"
  },
  {
    "url": "assets/js/74.49145b65.js",
    "revision": "4f255e26a069b4880405a1a03fefd239"
  },
  {
    "url": "assets/js/75.bcfe38ca.js",
    "revision": "19f4af806edbcc814f946507f1dd84d4"
  },
  {
    "url": "assets/js/76.c7b631bd.js",
    "revision": "dae623ad0551fbb35e56c9d47e947e9b"
  },
  {
    "url": "assets/js/77.a1e02fb9.js",
    "revision": "8d67e2ed79d00594bd534cabd90dfbd3"
  },
  {
    "url": "assets/js/78.a5fafaf4.js",
    "revision": "5002150a413cdb35e203d24695dcac8f"
  },
  {
    "url": "assets/js/79.2c76ce12.js",
    "revision": "07fc8b9a28cd893a3dbc762f6f9bc06b"
  },
  {
    "url": "assets/js/8.f78184da.js",
    "revision": "3a8cc96d860e5a2481f02245099832a6"
  },
  {
    "url": "assets/js/80.f2919dbc.js",
    "revision": "e058bf91ce28c03beeb46630f8cb40d9"
  },
  {
    "url": "assets/js/81.d67e5f2a.js",
    "revision": "5a493756dd0afbfc37e392890f70da4c"
  },
  {
    "url": "assets/js/82.9de141c8.js",
    "revision": "5b81f48704055e978c72f7d593790493"
  },
  {
    "url": "assets/js/83.71ae9456.js",
    "revision": "a64732286254ed6be93c1ad083e94a77"
  },
  {
    "url": "assets/js/84.5c5843c1.js",
    "revision": "22e14ab58a22fb4743688f256679666a"
  },
  {
    "url": "assets/js/85.dcce0539.js",
    "revision": "645b6c92c8b0031c1f656a4229deb4f1"
  },
  {
    "url": "assets/js/86.9e6cf052.js",
    "revision": "b1c45e25938a36f749b5c4d17d6cd46f"
  },
  {
    "url": "assets/js/87.3fdcb82e.js",
    "revision": "4f3b57a5add6a2e7184dd81d1e04b4bf"
  },
  {
    "url": "assets/js/88.4c492084.js",
    "revision": "ce9df66a46062aa8b148b7f9586d08e1"
  },
  {
    "url": "assets/js/89.7e885350.js",
    "revision": "2a1fc06c4073395a840fe9322c206896"
  },
  {
    "url": "assets/js/9.befe22f6.js",
    "revision": "e6827f87401510b38df375f95172206e"
  },
  {
    "url": "assets/js/90.98c763f6.js",
    "revision": "ff6363ee47c93e1dd9dbebac80f6a535"
  },
  {
    "url": "assets/js/91.216e7a8f.js",
    "revision": "4df5bd64c4b0d36f5fb869051fe643f0"
  },
  {
    "url": "assets/js/92.0e3366ac.js",
    "revision": "7c77cc122f3d95d3ce3caa83691dfe6f"
  },
  {
    "url": "assets/js/93.11025742.js",
    "revision": "7265aa89a2a9e64e7fdb7a20b5ccb1d6"
  },
  {
    "url": "assets/js/94.63f12394.js",
    "revision": "a148c86d8813b32b063295b808b233cc"
  },
  {
    "url": "assets/js/95.44635159.js",
    "revision": "6a162e5357adbb974ae17ec14659cef6"
  },
  {
    "url": "assets/js/96.1373c0b0.js",
    "revision": "332fc5743e2aba312d1f66f3e2bb97a6"
  },
  {
    "url": "assets/js/97.030591e1.js",
    "revision": "e49036b3c54fe62867d783d8fbd6c9ee"
  },
  {
    "url": "assets/js/98.7c44c407.js",
    "revision": "eba5cf8d223bdf9ab8ad5caf6bbe5112"
  },
  {
    "url": "assets/js/99.ee6f24ca.js",
    "revision": "b72c2c3f4f72ce6907f9a901b24187ca"
  },
  {
    "url": "assets/js/app.eafbfdf2.js",
    "revision": "578355e361430318f31ec5de13c9f81a"
  },
  {
    "url": "categories/index.html",
    "revision": "9212700e183b8213fd5a4c1d0e81da74"
  },
  {
    "url": "cs/algorithm/analysis.html",
    "revision": "437d1909b2e8b382c0f62cef38198952"
  },
  {
    "url": "cs/algorithm/data-structure.html",
    "revision": "c6ab0c17121a24fd58f29d61906a8818"
  },
  {
    "url": "cs/algorithm/find.html",
    "revision": "437d1909b2e8b382c0f62cef38198952"
  },
  {
    "url": "cs/algorithm/index.html",
    "revision": "4384b0f363b288723c76b4aeebbf851c"
  },
  {
    "url": "cs/algorithm/other.html",
    "revision": "2f7832e4d38ee2c0f6403b8e06e5bf35"
  },
  {
    "url": "cs/algorithm/sort.html",
    "revision": "a613c07e611e737d019d554b894d2d4b"
  },
  {
    "url": "cs/algorithm/stack-queue.html",
    "revision": "437d1909b2e8b382c0f62cef38198952"
  },
  {
    "url": "cs/algorithm/union-set.html",
    "revision": "437d1909b2e8b382c0f62cef38198952"
  },
  {
    "url": "cs/archit/cache.html",
    "revision": "437d1909b2e8b382c0f62cef38198952"
  },
  {
    "url": "cs/archit/cluster.html",
    "revision": "437d1909b2e8b382c0f62cef38198952"
  },
  {
    "url": "cs/archit/distributed.html",
    "revision": "437d1909b2e8b382c0f62cef38198952"
  },
  {
    "url": "cs/archit/index.html",
    "revision": "437d1909b2e8b382c0f62cef38198952"
  },
  {
    "url": "cs/archit/msg-queue.html",
    "revision": "437d1909b2e8b382c0f62cef38198952"
  },
  {
    "url": "cs/archit/sys-design.html",
    "revision": "437d1909b2e8b382c0f62cef38198952"
  },
  {
    "url": "cs/compile/index.html",
    "revision": "437d1909b2e8b382c0f62cef38198952"
  },
  {
    "url": "cs/cpp/associative-container.html",
    "revision": "3a9e6fac144b5bf93450799947eef268"
  },
  {
    "url": "cs/cpp/class.html",
    "revision": "bdb1eb60bb7d9a512a8bd2a02f3c024c"
  },
  {
    "url": "cs/cpp/copy-control.html",
    "revision": "fab9c259c8d5e59a08e0f66b087e5e76"
  },
  {
    "url": "cs/cpp/dynamic-memory.html",
    "revision": "f87d8f969846fd66f86e0b7fae9d71f2"
  },
  {
    "url": "cs/cpp/expr.html",
    "revision": "e95b12e1854529f82379e55812304d7d"
  },
  {
    "url": "cs/cpp/function.html",
    "revision": "978d46051e70cc506ed6717d3701630d"
  },
  {
    "url": "cs/cpp/index.html",
    "revision": "4384b0f363b288723c76b4aeebbf851c"
  },
  {
    "url": "cs/cpp/IO.html",
    "revision": "f308f26c509679e670eca4a16258e74a"
  },
  {
    "url": "cs/cpp/sentence.html",
    "revision": "3c3aa249c83548d745e3f7b29f15855c"
  },
  {
    "url": "cs/cpp/sequential-container.html",
    "revision": "c593ed2259cd24c629b608ba607552a0"
  },
  {
    "url": "cs/cpp/var-len-sequence.html",
    "revision": "010c08fe0d332ac0dbd8e4828f0f0af2"
  },
  {
    "url": "cs/cpp/var-types.html",
    "revision": "64ebf925549a977e60b710a9f5e886ab"
  },
  {
    "url": "cs/database/index.html",
    "revision": "437d1909b2e8b382c0f62cef38198952"
  },
  {
    "url": "cs/database/leetcode-database.html",
    "revision": "437d1909b2e8b382c0f62cef38198952"
  },
  {
    "url": "cs/database/MySQL.html",
    "revision": "437d1909b2e8b382c0f62cef38198952"
  },
  {
    "url": "cs/database/principle.html",
    "revision": "ebbe3d306c993252adcaab3c0f760282"
  },
  {
    "url": "cs/database/Redis.html",
    "revision": "437d1909b2e8b382c0f62cef38198952"
  },
  {
    "url": "cs/database/SQL.html",
    "revision": "437d1909b2e8b382c0f62cef38198952"
  },
  {
    "url": "cs/design/abserver.html",
    "revision": "eb82733b311095445810351cfcee9176"
  },
  {
    "url": "cs/design/abstract-factory.html",
    "revision": "381717d560044602b1ac8e1b772bd71e"
  },
  {
    "url": "cs/design/adapter.html",
    "revision": "b53e3ff22e0c601d170a9fcc14bd77b9"
  },
  {
    "url": "cs/design/agent.html",
    "revision": "49462285d804de0ed4efc5fa742503d0"
  },
  {
    "url": "cs/design/appearance.html",
    "revision": "712b0274537ae0507f31d58a4a5f563e"
  },
  {
    "url": "cs/design/bridging.html",
    "revision": "6196fff25e2a4c10da5d20ec6143a2c1"
  },
  {
    "url": "cs/design/combination.html",
    "revision": "56e70a1148aaf8f97db61aae8fe0d42e"
  },
  {
    "url": "cs/design/command.html",
    "revision": "704039a818b23213c3b721164037175e"
  },
  {
    "url": "cs/design/decoration.html",
    "revision": "ff0ea5752c6503a488b8d64132501173"
  },
  {
    "url": "cs/design/design-pattern.html",
    "revision": "437d1909b2e8b382c0f62cef38198952"
  },
  {
    "url": "cs/design/duty-chain.html",
    "revision": "bf1277cb22b9fa1ab29fcdcb2f284c4c"
  },
  {
    "url": "cs/design/factory-method.html",
    "revision": "abc43677d26389789baafd0c8d8a8ab2"
  },
  {
    "url": "cs/design/flyweight.html",
    "revision": "e435b6b451ba8329933dc2c6b9e58bbf"
  },
  {
    "url": "cs/design/generator.html",
    "revision": "c908edf898ddf8862e52966d7d51473d"
  },
  {
    "url": "cs/design/index.html",
    "revision": "f6875d0ea9a650b873583c4505d13aef"
  },
  {
    "url": "cs/design/interpreter.html",
    "revision": "ee073bf5c7c629f08fd988e6c0d50eb9"
  },
  {
    "url": "cs/design/iterator.html",
    "revision": "2fcb0474449a1510f4f88f27688450a5"
  },
  {
    "url": "cs/design/mediator.html",
    "revision": "01811d3b57a4cf976272ce8659c17faf"
  },
  {
    "url": "cs/design/memo.html",
    "revision": "505bf16d2a83868fff299c7b30fdf646"
  },
  {
    "url": "cs/design/null-object.html",
    "revision": "250e012dd45970692fa67a18e15942bf"
  },
  {
    "url": "cs/design/oriente-object.html",
    "revision": "437d1909b2e8b382c0f62cef38198952"
  },
  {
    "url": "cs/design/prototype.html",
    "revision": "cfbc7a986fb7eef0b8974ef0c26545d4"
  },
  {
    "url": "cs/design/simple-factory.html",
    "revision": "cf1ce9cbc8bda1bb4d55747df7867912"
  },
  {
    "url": "cs/design/singleton.html",
    "revision": "fd50da1a78c610e8dac58599a381aa5f"
  },
  {
    "url": "cs/design/state.html",
    "revision": "5a3303f39bcb68f8b322aed7bc33ed2f"
  },
  {
    "url": "cs/design/strategy.html",
    "revision": "310f0f6c304b008156e4d54e2292b100"
  },
  {
    "url": "cs/design/temp-method.html",
    "revision": "a6a715508b766fac0b9887afabd1f90c"
  },
  {
    "url": "cs/design/visitor.html",
    "revision": "5a27ef5cebe5d39367dddbe13899d2e0"
  },
  {
    "url": "cs/framework/front-end.html",
    "revision": "96541c31c97932b2bd80136f6e5cbe87"
  },
  {
    "url": "cs/framework/index.html",
    "revision": "437d1909b2e8b382c0f62cef38198952"
  },
  {
    "url": "cs/framework/vue-a.html",
    "revision": "18cfc62550837694bdc82f46a91bdcf0"
  },
  {
    "url": "cs/framework/vue-b.html",
    "revision": "b454243c9f796e3d8e22d3773610afb3"
  },
  {
    "url": "cs/framework/vue-c.html",
    "revision": "618c2127f10a8e48e17bd731f76bd9eb"
  },
  {
    "url": "cs/framework/vue3-reactivity.html",
    "revision": "1039f7c78ba6d5a9ad8f3620faeff121"
  },
  {
    "url": "cs/framework/webpack.html",
    "revision": "9f0295eff5b205b09d2d37e4d7dcef66"
  },
  {
    "url": "cs/index.html",
    "revision": "1824a3d9e85334a44a5a1037520f49f8"
  },
  {
    "url": "cs/java/basic.html",
    "revision": "437d1909b2e8b382c0f62cef38198952"
  },
  {
    "url": "cs/java/concurrenry.html",
    "revision": "437d1909b2e8b382c0f62cef38198952"
  },
  {
    "url": "cs/java/container.html",
    "revision": "437d1909b2e8b382c0f62cef38198952"
  },
  {
    "url": "cs/java/index.html",
    "revision": "437d1909b2e8b382c0f62cef38198952"
  },
  {
    "url": "cs/java/JavaIO.html",
    "revision": "437d1909b2e8b382c0f62cef38198952"
  },
  {
    "url": "cs/java/virtual-marchine.html",
    "revision": "437d1909b2e8b382c0f62cef38198952"
  },
  {
    "url": "cs/Lang/CSS.html",
    "revision": "a3bc47b874868f28617236f321902951"
  },
  {
    "url": "cs/Lang/English.html",
    "revision": "b20b73112caf2c91ca0ce27ae1ec2802"
  },
  {
    "url": "cs/Lang/ES6.html",
    "revision": "27231ae956befe268a5bbbc609505411"
  },
  {
    "url": "cs/Lang/html.html",
    "revision": "c9dd1a0f7a43579f56c925c7c9a44ce0"
  },
  {
    "url": "cs/Lang/index.html",
    "revision": "437d1909b2e8b382c0f62cef38198952"
  },
  {
    "url": "cs/Lang/JavaScript.html",
    "revision": "4061704d98baac7a298045c8342b5e3f"
  },
  {
    "url": "cs/Lang/JSTricks.html",
    "revision": "bfbd5bfb4d7d0aa527e668fad72b9987"
  },
  {
    "url": "cs/Lang/python.html",
    "revision": "a0e692376c832c820970c24b365503cc"
  },
  {
    "url": "cs/Lang/regex.html",
    "revision": "d9e7a555b5600e80e175bfdf20392303"
  },
  {
    "url": "cs/Lang/use_css.html",
    "revision": "319fdaed6cd3294e15abd03b2fc78cc8"
  },
  {
    "url": "cs/leetcode/array.html",
    "revision": "437d1909b2e8b382c0f62cef38198952"
  },
  {
    "url": "cs/leetcode/bin-search.html",
    "revision": "437d1909b2e8b382c0f62cef38198952"
  },
  {
    "url": "cs/leetcode/bit-operator.html",
    "revision": "437d1909b2e8b382c0f62cef38198952"
  },
  {
    "url": "cs/leetcode/bound-check.html",
    "revision": "3ab6dfbce12ea72adac2321f121e0fb3"
  },
  {
    "url": "cs/leetcode/divide-conquer.html",
    "revision": "437d1909b2e8b382c0f62cef38198952"
  },
  {
    "url": "cs/leetcode/double-pointer.html",
    "revision": "437d1909b2e8b382c0f62cef38198952"
  },
  {
    "url": "cs/leetcode/dynamic.html",
    "revision": "437d1909b2e8b382c0f62cef38198952"
  },
  {
    "url": "cs/leetcode/find.html",
    "revision": "437d1909b2e8b382c0f62cef38198952"
  },
  {
    "url": "cs/leetcode/graph.html",
    "revision": "437d1909b2e8b382c0f62cef38198952"
  },
  {
    "url": "cs/leetcode/greedy.html",
    "revision": "437d1909b2e8b382c0f62cef38198952"
  },
  {
    "url": "cs/leetcode/hash-table.html",
    "revision": "437d1909b2e8b382c0f62cef38198952"
  },
  {
    "url": "cs/leetcode/index.html",
    "revision": "437d1909b2e8b382c0f62cef38198952"
  },
  {
    "url": "cs/leetcode/lcd-3.html",
    "revision": "9197d241d46dedbb5b633d9a603f6672"
  },
  {
    "url": "cs/leetcode/list.html",
    "revision": "437d1909b2e8b382c0f62cef38198952"
  },
  {
    "url": "cs/leetcode/math.html",
    "revision": "437d1909b2e8b382c0f62cef38198952"
  },
  {
    "url": "cs/leetcode/ncode4.html",
    "revision": "98a763e16cd83cd9522022f1d46ba7e1"
  },
  {
    "url": "cs/leetcode/ncode5.html",
    "revision": "40a504cdbc23c261050229750e27b1b5"
  },
  {
    "url": "cs/leetcode/p0.html",
    "revision": "fc80c01bca5336182eaa6cf5f2c0022d"
  },
  {
    "url": "cs/leetcode/p1.html",
    "revision": "e78425379a4c3917e0590079e0ff90ad"
  },
  {
    "url": "cs/leetcode/p10.html",
    "revision": "d57510bf5bd7dbd5adee14894807e2de"
  },
  {
    "url": "cs/leetcode/p11.html",
    "revision": "988dd5cac7bd09208edaa16beba3ea0e"
  },
  {
    "url": "cs/leetcode/p12.html",
    "revision": "bd0bfd4cbe0aad0c7f68dfdc84ec304e"
  },
  {
    "url": "cs/leetcode/p13.html",
    "revision": "8d748a6b4bab6868a1cdbf739af665e3"
  },
  {
    "url": "cs/leetcode/p14.html",
    "revision": "2a3d45745a4183268c82cb2079a754a5"
  },
  {
    "url": "cs/leetcode/p15.html",
    "revision": "d6e4c5d48aa73b29a226a8436c8e5fe7"
  },
  {
    "url": "cs/leetcode/p16.html",
    "revision": "45e767dee0a6971794063e3c3ddb4dfe"
  },
  {
    "url": "cs/leetcode/p17.html",
    "revision": "9153adb0d21c2dab12257cfee1f78c0e"
  },
  {
    "url": "cs/leetcode/p18.html",
    "revision": "2744b049eb47178439da548fc7d82bcc"
  },
  {
    "url": "cs/leetcode/p19.html",
    "revision": "5618cf2c46ce630a8aa35ef546926662"
  },
  {
    "url": "cs/leetcode/p2.html",
    "revision": "355933068b7c55e0579165622bb192b3"
  },
  {
    "url": "cs/leetcode/p20.html",
    "revision": "36132fe4edeb89c62b5b25542cb3ebae"
  },
  {
    "url": "cs/leetcode/p21.html",
    "revision": "01b368d010c643148e902ce7521d3043"
  },
  {
    "url": "cs/leetcode/p22.html",
    "revision": "fa99d0a26329b5faf4d28358c0c61f2e"
  },
  {
    "url": "cs/leetcode/p23.html",
    "revision": "c2f45a7c77025ade20bf2051552e3fd6"
  },
  {
    "url": "cs/leetcode/p24.html",
    "revision": "114bfef505e0acdc7d1b622579a2b11f"
  },
  {
    "url": "cs/leetcode/p25.html",
    "revision": "3d58254812e9d37892c0de0c794cb527"
  },
  {
    "url": "cs/leetcode/p26.html",
    "revision": "2e7cac5807576759e31f32db0d886b04"
  },
  {
    "url": "cs/leetcode/p27.html",
    "revision": "552b44e87b66a158b2676a07b24f5423"
  },
  {
    "url": "cs/leetcode/p28.html",
    "revision": "db2becbdfb94fb023ca0edec3988935c"
  },
  {
    "url": "cs/leetcode/p29.html",
    "revision": "68899df0a8914ac0729af96ca8eff810"
  },
  {
    "url": "cs/leetcode/p3.html",
    "revision": "c9864ccbfdc46a34169b8063ad386728"
  },
  {
    "url": "cs/leetcode/p30.html",
    "revision": "db31e411c29546a6309bf69c4688d191"
  },
  {
    "url": "cs/leetcode/p31.html",
    "revision": "b82be52deef55275e55f189850fed29f"
  },
  {
    "url": "cs/leetcode/p32.html",
    "revision": "cf2318a386de8c7764c0cb8d314da536"
  },
  {
    "url": "cs/leetcode/p33.html",
    "revision": "d20ef35ed108ad363dbf24e6ecd7612c"
  },
  {
    "url": "cs/leetcode/p34.html",
    "revision": "a81007c97d7732bbe7f16398727f3dd4"
  },
  {
    "url": "cs/leetcode/p35.html",
    "revision": "f7b344cc621f71b3e361f06722a23816"
  },
  {
    "url": "cs/leetcode/p36.html",
    "revision": "49d67ef573eb35f43cb158e0e70cc5ce"
  },
  {
    "url": "cs/leetcode/p37.html",
    "revision": "440617574668f0b6703751b7ea2a681c"
  },
  {
    "url": "cs/leetcode/p38.html",
    "revision": "a9aef3a0d657a0d0b46b3736ce98c701"
  },
  {
    "url": "cs/leetcode/p39.html",
    "revision": "c3545812140e2a53faf00f9c24d8aedc"
  },
  {
    "url": "cs/leetcode/p4.html",
    "revision": "a1cf033923c12c348f5e3d9cc1a430c9"
  },
  {
    "url": "cs/leetcode/p40.html",
    "revision": "03ccc8135448343bd5afe36d26e8d22f"
  },
  {
    "url": "cs/leetcode/p41.html",
    "revision": "93c37121a089f43823b590f9c42cd7f6"
  },
  {
    "url": "cs/leetcode/p42.html",
    "revision": "3b0e01bab65e8241e5e0b8f22072d4e4"
  },
  {
    "url": "cs/leetcode/p43.html",
    "revision": "c8db38b5cebbc765a4072c65467fa629"
  },
  {
    "url": "cs/leetcode/p44.html",
    "revision": "58981605d2b4a394224545bf487c6295"
  },
  {
    "url": "cs/leetcode/p45.html",
    "revision": "34e624f70a124e24942516e8ce92f99f"
  },
  {
    "url": "cs/leetcode/p46.html",
    "revision": "e9230a4b58fefaad8c979d42a802b109"
  },
  {
    "url": "cs/leetcode/p47.html",
    "revision": "c082f337b3170d68fde94f8de8592608"
  },
  {
    "url": "cs/leetcode/p48.html",
    "revision": "d1416f991314454c8dd9d78b174578e6"
  },
  {
    "url": "cs/leetcode/p49.html",
    "revision": "47b4c20cd5cab049467705a75c415ea0"
  },
  {
    "url": "cs/leetcode/p5.html",
    "revision": "eab13563b0da365694c2d50e5770590a"
  },
  {
    "url": "cs/leetcode/p50.html",
    "revision": "2892b701c4ef8b4b3243e1e316b83aee"
  },
  {
    "url": "cs/leetcode/p51.html",
    "revision": "1a3146427f9a7919406542ded67916e3"
  },
  {
    "url": "cs/leetcode/p52.html",
    "revision": "3220ed58617315265921b1adb2872365"
  },
  {
    "url": "cs/leetcode/p53.html",
    "revision": "e3e895fe7ca022f513248e13591ce6ed"
  },
  {
    "url": "cs/leetcode/p54.html",
    "revision": "fbf3019cafbd7f48384fa0db32bacd26"
  },
  {
    "url": "cs/leetcode/p55.html",
    "revision": "857be5d4a76e8f267c5a82ab80d5d2ad"
  },
  {
    "url": "cs/leetcode/p56.html",
    "revision": "db47e83d9eb2b8cdb88b3574c4ee9093"
  },
  {
    "url": "cs/leetcode/p57.html",
    "revision": "30384dcc36091185f2e7e5b2581cc08b"
  },
  {
    "url": "cs/leetcode/p58.html",
    "revision": "6db5cec57a4ddd25115e098cf0bf233f"
  },
  {
    "url": "cs/leetcode/p59.html",
    "revision": "60d73add3f4df2188c7c72c63179d074"
  },
  {
    "url": "cs/leetcode/p6.html",
    "revision": "b5f34a2433d0cdc1a02f1d8fc9fdb6db"
  },
  {
    "url": "cs/leetcode/p60.html",
    "revision": "f320980718f5870a14efec3c98cb2b13"
  },
  {
    "url": "cs/leetcode/p61.html",
    "revision": "5797b16d037c376879fb69d85452ee8e"
  },
  {
    "url": "cs/leetcode/p62.html",
    "revision": "3d5ed89a29a1a5a289cc2245f501090e"
  },
  {
    "url": "cs/leetcode/p63.html",
    "revision": "6b6afda654a42c830461a1ec20d4b620"
  },
  {
    "url": "cs/leetcode/p64.html",
    "revision": "4b5e50d31e05ee71f47e813cff8c7413"
  },
  {
    "url": "cs/leetcode/p65.html",
    "revision": "03e444061b267192967a76ece4216117"
  },
  {
    "url": "cs/leetcode/p66.html",
    "revision": "3ce91852c1fed71f36fc27d8a734e2a3"
  },
  {
    "url": "cs/leetcode/p67.html",
    "revision": "e15591c169304e7c7e72a60f09122c9d"
  },
  {
    "url": "cs/leetcode/p68.html",
    "revision": "93a929961225285365565b1c870f7623"
  },
  {
    "url": "cs/leetcode/p69.html",
    "revision": "50b8c4735f5283798f2ee4a471ae3aa4"
  },
  {
    "url": "cs/leetcode/p7.html",
    "revision": "68d03a7d6be56eab22dab3312472a3e6"
  },
  {
    "url": "cs/leetcode/p70.html",
    "revision": "2fc73bf25bac9e883332ecd4fdf1f07c"
  },
  {
    "url": "cs/leetcode/p71.html",
    "revision": "b468a5d9116a77c4a86ebc93b6f6f46d"
  },
  {
    "url": "cs/leetcode/p72.html",
    "revision": "59ddb1915010664129cceeffe5693fe4"
  },
  {
    "url": "cs/leetcode/p73.html",
    "revision": "437d1909b2e8b382c0f62cef38198952"
  },
  {
    "url": "cs/leetcode/p74.html",
    "revision": "437d1909b2e8b382c0f62cef38198952"
  },
  {
    "url": "cs/leetcode/p75.html",
    "revision": "437d1909b2e8b382c0f62cef38198952"
  },
  {
    "url": "cs/leetcode/p76.html",
    "revision": "437d1909b2e8b382c0f62cef38198952"
  },
  {
    "url": "cs/leetcode/p77.html",
    "revision": "49d67ef573eb35f43cb158e0e70cc5ce"
  },
  {
    "url": "cs/leetcode/p78.html",
    "revision": "437d1909b2e8b382c0f62cef38198952"
  },
  {
    "url": "cs/leetcode/p79.html",
    "revision": "437d1909b2e8b382c0f62cef38198952"
  },
  {
    "url": "cs/leetcode/p8.html",
    "revision": "1c76e634460569da7c310afa79c13bcd"
  },
  {
    "url": "cs/leetcode/p80.html",
    "revision": "f0e4cc95fe3ecb50e017e07878e30f49"
  },
  {
    "url": "cs/leetcode/p81.html",
    "revision": "4384b0f363b288723c76b4aeebbf851c"
  },
  {
    "url": "cs/leetcode/p82.html",
    "revision": "437d1909b2e8b382c0f62cef38198952"
  },
  {
    "url": "cs/leetcode/p9.html",
    "revision": "6f7f4ab06329848561618911d20068b7"
  },
  {
    "url": "cs/leetcode/sort.html",
    "revision": "437d1909b2e8b382c0f62cef38198952"
  },
  {
    "url": "cs/leetcode/stack-queue.html",
    "revision": "437d1909b2e8b382c0f62cef38198952"
  },
  {
    "url": "cs/leetcode/string.html",
    "revision": "437d1909b2e8b382c0f62cef38198952"
  },
  {
    "url": "cs/leetcode/tree.html",
    "revision": "437d1909b2e8b382c0f62cef38198952"
  },
  {
    "url": "cs/linux/common-command.html",
    "revision": "90e346d571e6bc8bf251d4c866dceb17"
  },
  {
    "url": "cs/linux/index.html",
    "revision": "437d1909b2e8b382c0f62cef38198952"
  },
  {
    "url": "cs/linux/Linux.html",
    "revision": "8bea4f27b3de0ee11783bb3ded3ee4b6"
  },
  {
    "url": "cs/linux/process.html",
    "revision": "78d615914f94e0665cbc252140470152"
  },
  {
    "url": "cs/network/application.html",
    "revision": "437d1909b2e8b382c0f62cef38198952"
  },
  {
    "url": "cs/network/conclude.html",
    "revision": "19f040b62f1e90d3e0951c3f58852dce"
  },
  {
    "url": "cs/network/HTTP.html",
    "revision": "437d1909b2e8b382c0f62cef38198952"
  },
  {
    "url": "cs/network/index.html",
    "revision": "4384b0f363b288723c76b4aeebbf851c"
  },
  {
    "url": "cs/network/link.html",
    "revision": "4b7f78e4f84076a532608c0d627a67dd"
  },
  {
    "url": "cs/network/network.html",
    "revision": "c91b73edb095caa239b9eaef497400e0"
  },
  {
    "url": "cs/network/physical.html",
    "revision": "97a1880189cc8a4f5a87be5259a1e87f"
  },
  {
    "url": "cs/network/Socket.html",
    "revision": "437d1909b2e8b382c0f62cef38198952"
  },
  {
    "url": "cs/network/summary.html",
    "revision": "cc9e31bcf92fd24a8786ae977ec2b916"
  },
  {
    "url": "cs/network/transport.html",
    "revision": "437d1909b2e8b382c0f62cef38198952"
  },
  {
    "url": "cs/Osystem/concept.html",
    "revision": "c2d8450b2ed9e7586d4047e6a48ccbee"
  },
  {
    "url": "cs/Osystem/conclude.html",
    "revision": "8670c3411b29a0dc092643d6d1b6f4e8"
  },
  {
    "url": "cs/Osystem/deadlock.html",
    "revision": "d5ba77723cb4b24fd017eaa7e382515b"
  },
  {
    "url": "cs/Osystem/device-mgmt.html",
    "revision": "437d1909b2e8b382c0f62cef38198952"
  },
  {
    "url": "cs/Osystem/index.html",
    "revision": "4384b0f363b288723c76b4aeebbf851c"
  },
  {
    "url": "cs/Osystem/memory-mgmt.html",
    "revision": "df258c1ba8ea47394be2bdbdf32be1a3"
  },
  {
    "url": "cs/Osystem/process-mgmt.html",
    "revision": "95c100fe06789e37ac0c606edccc006a"
  },
  {
    "url": "cs/tools/build-tools.html",
    "revision": "437d1909b2e8b382c0f62cef38198952"
  },
  {
    "url": "cs/tools/code-readability.html",
    "revision": "437d1909b2e8b382c0f62cef38198952"
  },
  {
    "url": "cs/tools/code-style.html",
    "revision": "437d1909b2e8b382c0f62cef38198952"
  },
  {
    "url": "cs/tools/Docker.html",
    "revision": "437d1909b2e8b382c0f62cef38198952"
  },
  {
    "url": "cs/tools/Git.html",
    "revision": "d7ecb94bdb60b2a01822288b168be59b"
  },
  {
    "url": "cs/tools/index.html",
    "revision": "437d1909b2e8b382c0f62cef38198952"
  },
  {
    "url": "cs/tools/regular-expr.html",
    "revision": "437d1909b2e8b382c0f62cef38198952"
  },
  {
    "url": "cs/web/attack-tech.html",
    "revision": "437d1909b2e8b382c0f62cef38198952"
  },
  {
    "url": "cs/web/browser.html",
    "revision": "e939f26c1220f36d725d799da58f0119"
  },
  {
    "url": "cs/web/guide.html",
    "revision": "a3bc47b874868f28617236f321902951"
  },
  {
    "url": "cs/web/index.html",
    "revision": "b16f7f2be882136ce1b7ce98f4388170"
  },
  {
    "url": "cs/web/performance.html",
    "revision": "80375bdd56b195512352a26fa0c832fe"
  },
  {
    "url": "cs/web/resource.html",
    "revision": "ddc584d36c355f26db20f54158cae186"
  },
  {
    "url": "cs/web/web.html",
    "revision": "56755ef07a180293578332bfc7dc494e"
  },
  {
    "url": "daily-life/phone-lost.html",
    "revision": "7eb3eb559213f6edaef20f6e502ff68e"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "1b4f635128a82bc4fd9a0c8141d9386e"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "b2f2662e652fc16c402d788b42b29efa"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "85d9f0d2c6d7c2c20a04c5ae95aa1860"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "33db48f5c6c1b732365cab69e3c155b0"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "a2d48fb807fd7c2a6deb2e2170ac76f3"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "2350602bfb8228f4f0361e4f64321c7b"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "2797b3ae848e499c5fe6b0bb9368ed89"
  },
  {
    "url": "index.html",
    "revision": "437d1909b2e8b382c0f62cef38198952"
  },
  {
    "url": "language/english/adjective.html",
    "revision": "fdadb6e10e18c8441095407e792de212"
  },
  {
    "url": "language/english/adverb.html",
    "revision": "4b1b7a042d59e747d703a3fe51877eae"
  },
  {
    "url": "language/english/determiner.html",
    "revision": "8fa2159f06713d84157f39572b76a0eb"
  },
  {
    "url": "language/english/differ.html",
    "revision": "d4fed1e002e6f3bffa76813aafbfb550"
  },
  {
    "url": "language/english/index.html",
    "revision": "b20b73112caf2c91ca0ce27ae1ec2802"
  },
  {
    "url": "language/english/modal.html",
    "revision": "17f4ab01cee1c59dca848eb24ffcab9a"
  },
  {
    "url": "language/english/mood.html",
    "revision": "90bfb25aab45c6d7a15e198501414beb"
  },
  {
    "url": "language/english/non-predicate.html",
    "revision": "4c3f77c90e4eb66dce27a66d024c24fa"
  },
  {
    "url": "language/english/nouns.html",
    "revision": "83018445a863cfc5fe6b13ca072961c2"
  },
  {
    "url": "language/english/phonetic.html",
    "revision": "205f13399ed894b8d8f0550fcc06683b"
  },
  {
    "url": "language/english/preposition.html",
    "revision": "437d1909b2e8b382c0f62cef38198952"
  },
  {
    "url": "language/english/pronoun.html",
    "revision": "23bf62262133d4efd8f7f06d3ecdafdd"
  },
  {
    "url": "language/english/sentence.html",
    "revision": "2757d098f1db2f1b1a07e48d0a52f998"
  },
  {
    "url": "language/english/tense.html",
    "revision": "437d1909b2e8b382c0f62cef38198952"
  },
  {
    "url": "language/english/verb.html",
    "revision": "3420fe8b92f4d482a31f0c643594e332"
  },
  {
    "url": "language/english/word5000.html",
    "revision": "437d1909b2e8b382c0f62cef38198952"
  },
  {
    "url": "language/index.html",
    "revision": "437d1909b2e8b382c0f62cef38198952"
  },
  {
    "url": "tag/index.html",
    "revision": "b98b90dbbe49ab50e3b757fd10c14c2c"
  },
  {
    "url": "timeline/index.html",
    "revision": "afa85ed1ad159ec7172d450804d46a1f"
  },
  {
    "url": "tools/chatgpt.html",
    "revision": "437d1909b2e8b382c0f62cef38198952"
  },
  {
    "url": "tools/gpost.html",
    "revision": "437d1909b2e8b382c0f62cef38198952"
  },
  {
    "url": "tools/hash.html",
    "revision": "437d1909b2e8b382c0f62cef38198952"
  },
  {
    "url": "tools/index.html",
    "revision": "437d1909b2e8b382c0f62cef38198952"
  },
  {
    "url": "tools/test1234567890.html",
    "revision": "437d1909b2e8b382c0f62cef38198952"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
