import * as React from 'react';
import {graphql, useLazyLoadQuery} from 'react-relay';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootRoute} from '../../types/Route';
import {ProductsInfo_Query} from './__generated__/ProductsInfo_Query.graphql';
import {withLoader} from '../../features/relay/HOCs/with-loader';
import {Image, View} from 'react-native';
import {Button, Text} from '@rneui/themed';

const products = [
  'organic-eggs',
  'eggs-whitelarge-al-ain-farm',
  'eggs-white-medium-al-ain-farm',
  'chili-yellow',
  'chili-red',
  '1-basket',
  'mix-capsicum-cubes',
  'eggplant-cubes-wash-and-sanitized',
  'carrot-sliced',
  'carrot-cubes',
  'beetroot-cubes',
  'sweet-potato-stick',
  'zucchini-green-cubes',
  'ginger-chopped',
  'coriander-leaves-chopped',
  'zucchin-yellow-cubes',
  'pumpkin-red-cubes',
  'parsley-chopped',
  'lettuce-mix-sanitized',
  'kale-sanitized',
  'papaya-ripe',
  'ramadan-bundle-of-fruity-treats',
  'orange-pure-natural-juice',
  'pineapple-pure-natural-juice',
  'pomegranate-pure-natural-juice',
  'rocket-apple',
  'tenderstem-broccoli',
  'organic-parsley',
  'organic-drumsticks',
  'organic-spring-onion',
  'organic-beans-long',
  'organic-oregano',
  'organic-baby-spinach',
  'organic-cabbage-red',
  'organic-cabbage-flat',
  'organic-eggplant-round',
  'organic-eggplant-baby',
  'organic-radish-white',
  'organic-zucchini-yellow',
  'organic-eggplant-long',
  'organic-green-beans',
  'organic-zucchini-yellow-round',
  'organic-capsicum-red',
  'organic-ginger',
  'organic-zucchini-round-white',
  'organic-shallot',
  'organic-eggplant-pink-strip',
  'green-hummus',
  'pineapple-cubes',
  'mix-fruit-salad',
  'super-ramadan-boxes',
  'smoothie-box-raw-material-for-8-person',
  'orange-mawardi',
  'organic-zucchini-green',
  'sweet-lemon',
  'egg-white',
  'surprise-box',
  'lettuce-romaine',
  'lollo-green',
  'baby-kale',
  'couple-fruit-basket',
  'organic-red-chard',
  'organic-coriander',
  'baby-gem',
  'organic-garden-crees',
  'organic-purslane',
  'mandarin-sanitized',
  'pears-sanitized',
  'orange-va',
  'organic-butternut-squash',
  'organic-dill-leaves',
  'organic-mint',
  'organic-radish-red',
  'organic-sweet-corn',
  'halloween-pumpkim',
  'coriander-pot',
  'rosemary-plant-pot',
  'sage-leaves-plant-pot',
  'dill-leaves-plant-pot',
  'mango-long',
  'thyme-plant-pot',
  'water-cress',
  'rocca-plant-pot',
  'black-grapes-pp',
  'mint-plant-pot',
  'yellow-plum-cherry-tomato',
  'eggplant-baby-pink',
  'organic-sugarcane',
  'dried-fig',
  'amla',
  'organic-rocket-leaves',
  'organic-kale-leave',
  'organic-basil-leaves',
  'organic-pomegranate',
  'organic-green-chard',
  'black-plum',
  'chikoo-by-air',
  'pearl-baby-onion',
  'organic-bottle-gourd',
  'organic-eggplant',
  'apple-ambrosia',
  'apple-jazz',
  'guava-pink',
  'pretty-in-pink',
  'dusk-and-dawn',
  'sunrise-and-dawn',
  'sunrise-bloom',
  'edens-garden',
  'campania',
  'felicity',
  'caribbean-twist',
  'fruits-of-the-forest',
  'mamma-mia',
  'tropical-summer',
  'arabian-bloom',
  'indian-summer',
  'heaven-scent',
  'a-new-day',
  'sunrise',
  'red-cherry-tomato',
  'garlic-organic',
  'leeks-organic',
  'organic-moringa-leaves',
  'organic-okra',
  'green-hot-chili-organic',
  'organic-capsicum-green',
  'organic-tomato-cherry',
  'organic-cucumber',
  'vip-box',
  'sweet-potato-purple',
  'cherry',
  'pears-vermont-beauty',
  'super-dad-fruit-cake',
  'dad-is-love',
  'zucchini-green',
  'black-grapes-pp-seedless',
  'cherry-red',
  'mulukhia-leaves',
  'molokhia-leaves',
  'red-plum',
  'red-plum',
  'mango-alphonso-by-air',
  'red-beet-sprout',
  'green-capsicum',
  'dragon-fruit-red',
  'passion-fruit-purple',
  'cactus-pears',
  'cactus-pears',
  'tunisian-date',
  'mabroom-gold-dates',
  'algeria-date',
  'khudri-date',
  'sagai-date',
  'safuri-dates',
  'dates-nut',
  'janerik-sour-green-plums',
  'mabroom-dates',
  'grape-leave',
  'fixperts60',
  'fixperts80',
  'beef-tomato',
  'anbara-dates',
  'fruit-basket',
  'fruit-platter',
  'coco-thumb',
  'snack-tomato-mix',
  'cherry-tomato-mix',
  'almond-milk',
  'white-onion',
  'watermelon-yellow-seedless',
  'tropical-sunrise',
  'dried-figs',
  'premium-dried-apricots',
  'kumruddin-apricot-paste',
  'chefs-mix',
  'spring-mix',
  'burger-lettuce',
  'thai-basil',
  'sweet-basil',
  'signature-mix',
  'unsberg',
  'healty-mix',
  'spicy-mix',
  'tomato-roma-organic',
  'carrots-organic',
  'potato-organic',
  'organic-beef-tomato',
  'organic-chilli-green',
  'pumpkin-red-organic',
  'organic-plum-cherry-tomato',
  'organic-mixed-capsicums',
  'green-capsicum-organic',
  'organic-marrow',
  'organic-beetroot',
  'cucumber-organic',
  'easter-fruit-platters',
  'orange-sommoti',
  'khudri-dates-premium',
  'dabbas-dates',
  'dates-paste',
  'deluxe-cocktail-fruits',
  'ultimate-tower3',
  'mango-pure',
  'mango-lalbagh',
  'baby-banana-senorita',
  'banana-organic',
  'banana-senorita',
  'banana-snack-pack',
  'marrow',
  'cashew-milk',
  'coconut-water',
  'fruit-punch',
  'lemonade',
  'almond-mylk',
  'thyme-for-ginger',
  'carrot-top',
  'heartbeat-juice',
  'green-gold',
  'daily-green',
  'tower-b3-watermelon-cake',
  'tower-a3-watermelon-cake',
  'festive-choice',
  'wonder-fruit-greetings',
  'watermelon-grande-basket',
  'blossom-fruits-basket',
  'watermelon-photo-frame',
  'classic-sunset-platter',
  'berries-galore-platter',
  'bursting-platter',
  'prickly-pears-red',
  'broad-beans',
  'kiwi-berry',
  'mixed-moong-sprouts',
  'red-chawli-sprouts',
  'black-chana-sprouts',
  'horse-gram-sprouts',
  'black-eyed-beans-sprouts',
  'green-grammoong-sprouts',
  'rainbow-stir-fry',
  'aromatic-stir-fry',
  'pears-long',
  'shelled-peas',
  'chopped-frisee-mix',
  'chopped-butterhead',
  'chopped-green-kale',
  'baby-pakchoi',
  'tender-coconuts',
  'lettuce-mix',
  'lollo-mix',
  'lettuce-frissee-green',
  'snake-fruit',
  'jackfruit',
  'tomato-green-house',
  'marian-plum',
  'mango-tommy',
  'mango-tommy',
  'banana-green',
  'kabocha-squash',
  'grapefruit-yellow',
  'banana-flower',
  'pomelo-white',
  'apple-rocket',
  'lime-india',
  'apple-amp',
  'apple-amp',
  'red-apple-juice',
  'orange-juice',
  'pineapple-juice',
  'carrot-juice',
  'watermelon-juice',
  'peaches-red',
  'mixed-kale',
  'toscana-kale',
  'crown-pears',
  'summer-fruit-basket',
  'blood-orange',
  'blood-orange',
  'white-grapes-seeded',
  'curuba-banana-passionfruit',
  'mango-lilly',
  'banana-black-grapes-seedless',
  'mango-r2e2',
  'mango-yasmin',
  'figs-green',
  'avocado-green',
  'mango-naomi',
  'mango-mabrouka',
  'green-pista',
  'green-pista',
  'yellow-barhi-dates',
  'yellow-barhi-dates',
  'papaya-dole',
  'papaya-dole',
  'sweet-karela',
  'mangoes-r2e2',
  'romanesco-broccoli',
  'mulukhiyah',
  'green-cauliflower',
  'mizuna-leaves',
  'beetroot-yellow',
  'lettuce-mache',
  'baby-beetroot-chioggia-strip',
  'chilli-poblano',
  'garlic-leaves',
  'garlic-sprouts',
  'figs-black',
  'beans-green',
  'black-figs',
  'prickly-pears',
  'mango-sunehra',
  'mango-white-chaunsa',
  'red-thomson-grapes',
  'mashadi-sweet-melon',
  'banana-yellow-big',
  'mango-ataulfo',
  'curly-kale',
  'pears-piqa-boo',
  'mango-mahachanok',
  'limes-green-seedless',
  'baby-eggplant-green',
  'apricot-ajami',
  'mango-sindhri',
  'heirloom-tomatoes',
  'pears-red',
  'kiwi-green',
  'mango-rajpuri',
  'kiwi',
  'fenugreek-methi',
  'loquat',
  'shallots',
  'fresh-yam-long',
  'feng-shui-pears',
  'golden-pears',
  'bakleh-purslane',
  'apple-breeze',
  'apple-kanzi',
  'apple-juicy-premium-wash',
  'lime-green-seeded',
  'pitaya-yellow',
  'pitaya',
  'rose-apple',
  'tamarillo',
  'mango-sweet-honey',
  'akadonia-loquat',
  'green-almond',
  'white-grapes',
  'iftar-box',
  'sukkari-dates',
  'rock-melon',
  'dragon-fruit',
  'eggplant-baby-star-pink',
  'grape-leaves',
  'apple-royal-beauty',
  'mango-taimur',
  'tomatoes-green-house',
  'carrot',
  'red-onion',
  'barari',
  'fardh',
  'sukari-dates',
  'agria-potatoe',
  'baby-spinach-sanitized',
  'grapefruit-white',
  'festive-box',
  'green-mango',
  'chikoo-sapodilla-by-air',
  'custard-apple',
  'yellow-plums',
  'yellow-plums',
  'flat-peaches',
  'red-gem-lettuce',
  'ramadan-box',
  'mix-box',
  'extra-large-vegetable-box',
  'large-vegetable-box',
  'medium-vegetable-box',
  'medium-fruit-box',
  'small-fruit-box',
  'small-vegetable-box',
  'large-fruit-box',
  'pak-choi',
  'guava-red',
  'banana-red-kadali',
  'mango',
  'royal-gala-apple',
  'jujube',
  'golden-mangoes',
  'jumbo-passion-fruit',
  'avocado-hass-ripe',
  'mini-fruit-basket',
  'papdi-broad-beans',
  'papdi-broad-beans',
  'jicama',
  'long-white-eggplant',
  'eggplant-baby-green-round',
  'habanero-chillies',
  'dried-guajillo-chillies',
  'chervil',
  'brussel-sprout',
  'tomatillo',
  'red-birds-eye-chillies',
  'lotus-root',
  'orange-capsicums',
  'baby-red-chard',
  'jerusalem-artichoke',
  'star-fruit',
  'star-fruit',
  'tarragon',
  'rhubarb',
  'pandan-leaves',
  'fresh-oregano-leaves',
  'shiitake-mushroom',
  'king-oyster-mushroom',
  'mango-green',
  'baby-rocca',
  'green-baby-capsicum',
  'onion-white',
  'sweet-potato-orange-cut-cube',
  'beetroot-shredded',
  'coconut-shredded',
  'orange-capsicum-julienne',
  'cabbage-mix-shredded',
  'strawberry-half',
  'mango-cubes',
  'mix-loose-grapes',
  'green-grapes',
  'green-grapes',
  'blue-berry-sanitized',
  'mix-berries',
  'green-apple-segment',
  'baby-yellow-pepper',
  'wheat-grass',
  'vene-cress',
  'organic-turmeric',
  'yellow-tomatoes',
  'tomato-plum-cherry-shaker',
  'tomato-plum',
  'tomato-cherry-tomatolicious',
  'tomato-beef',
  'tomato',
  'tahoon-cress',
  'swedes',
  'baby-spinach',
  'shiso-purple',
  'shiso-mixed',
  'shiso-leaves-purple',
  'shiso-leaves-green',
  'shiso-green-cress',
  'indian-shallots',
  'scarlet-cress',
  'salicornia-samphire',
  'salicornia-cress',
  'salad-pea',
  'sakura-mix',
  'sakura-cress',
  'sage-leaves',
  'rucola-cress',
  'rosemary-pot',
  'rock-chives',
  'red-mustard-cress',
  'baby-red-pepper',
  'pumpkin',
  'potato-sweet-noodle',
  'sweet-potato',
  'potato-cherie',
  'persinette-cress',
  'pepper-long-sweet',
  'paztizz-tops',
  'onion-red',
  'mustard-cress',
  'white-baby-mushroom',
  'motti-cress',
  'majii-leaves',
  'lupine-cress',
  'limes-green',
  'redleaf-lettuce',
  'oakleaf-red-leaves',
  'lettuce-cresta',
  'kohlrabi',
  'kikuna-leaves',
  'jeere-cress',
  'honny-cress',
  'baby-green-pepper',
  'ghoa-cress',
  'garden-cress',
  'floregano',
  'eggplant-pea',
  'eggplant-thai',
  'edamame',
  'dushi-button',
  'cress-rucola',
  'cress-rock-chives',
  'cress-mustard',
  'cress-daikon',
  'cress-afilla',
  'cornabria-blossom',
  'coriander-cress',
  'citra-leaves',
  'chives',
  'chillie-red',
  'green-long-chili',
  'chilli-cress',
  'yellow-capsicums',
  'red-capsicums',
  'red-capsicums',
  'green-capsicums',
  'chinese-cabbage-white',
  'brocco-cress',
  'borage-cress',
  'blinq-cress',
  'blinq-blossom',
  'beetroot-chioggia',
  'gawar-beans',
  'basil-cress',
  'baby-broccoli',
  'baby-artichokes',
  'atsina-cress',
  'arvi-taro-root',
  'artichokes',
  'affilla-cress',
  'baby-capsicums-green',
  'baby-candy-beetroot',
  'baby-beetroot',
  'baby-asparagus',
  'green-asparagus',
  'mangosteen',
  'figs',
  'black-plums',
  'mango-alphonso',
  'mango-khalathoor',
  'mango-badami',
  'green-apple',
  'baby-cucumber',
  'peaches',
  'white-grapes-seedless',
  'quince',
  'golden-honeydew-melon',
  'aloe-vera-leaves',
  'pomelo-red',
  'sugarcane',
  'cranberries',
  'lemon-sweet',
  'apple-green-sanitized',
  'apple-red-sanitized',
  'banana-sanitized',
  'the-cube',
  'apple-fuji',
  'tender-stem-broccoli',
  'baby-corn-green-beans-amp',
  'sugarsnap-peas',
  'fine-beans',
  'french-beans-baby-corn',
  'sugarsnap-peas-baby-corn',
  'mangetout',
  'tender-stem-broccoli-green-beans-sugarsnap-peas-mangetout',
  'baby-corn-mangetout',
  'tender-stem-broccoli-baby-corn',
  'tender-green-broccoli-mangetout',
  'tender-green-broccoli-fine-beans',
  'fine-beans-trimmed',
  'baby-corn-medley',
  'sugarsnap-peas-tender-green-broccoli',
  'school-box',
  'kiwi-golden',
  'kiwi-golden',
  'asparagus-white',
  'mix-fruit-basket-large',
  'potato-chat-red',
  'carrots-yellow',
  'carrots-purple',
  'orange-cauliflower',
  'purple-cauliflower',
  'red-spinach',
  'cabbage-savoy',
  'marjoram',
  'chayote',
  'king-coconuts',
  'red-plums',
  'banana-dole',
  'cherries',
  'banana-yellow-small',
  'cabbage-flat',
  'papaya',
  'tindly-ivy-gourd',
  'fennel',
  'mixed-plum-cherry-tomatoes',
  'chat-potato',
  'pak-choi-oriental',
  'turmeric',
  'green-marrow',
  'garlic-normal',
  'endives-red-chicory',
  'endives-white-chicory',
  'long-black-eggplant',
  'baby-eggplant-star-pink',
  'baby-eggplant',
  'baby-eggplant',
  'banana-shallots',
  'angelino-plums',
  'passion-fruit',
  'lemon',
  'kiwi-green-zespri',
  'apple-pink-lady',
  'apple-golden',
  'apple-green',
  'coconut-dry',
  'apricot',
  'apricot',
  'sweet-potatoes',
  'cucumber',
  'banana-small-box',
  'banana-chiquita',
  'golden-berries',
  'granadilla',
  'green-peas',
  'green-beans',
  'khalas-dates',
  'khalas-dates',
  'khalas-dates',
  'chestnuts',
  'eggplant-long-green',
  'garlic-pure-white',
  'sweet-tamarind',
  'medjool-dates',
  'garlic',
  'garlic',
  'apple-red',
  'apple-red',
  'apple-royal-gala',
  'safawi-dates',
  'khudri-dates',
  'maryam-dates',
  'sagai-dates',
  'ajwa-dates',
  'baby-rocca-leaves',
  'dudhi-bottle-gourd',
  'asian-mix',
  'spice-mix',
  'gourmet-mix',
  'earth-mix',
  'tendril',
  'red-veined-sorrel',
  'red-radish',
  'mustard',
  'green-radish',
  'garlic-chives',
  'beetroot-amaranth',
  'arugula',
  'mommys-helper-box',
  'lettuce-lollo-bionda-sanitized',
  'tomatoes-sliced',
  'fruity-treat-basket',
  'lychee',
  'lettuce-romaine-shredded',
  'power-plant-box',
  'mandarin-with-leaves',
  'mango-kent',
  'white-radish',
  'kaki-persimmon',
  'kaki-persimmon',
  'golden-kiwi',
  'green-grapes-seedless-pp',
  'nectarine',
  'rosemary',
  'peaches-yellow',
  'kimia-dates',
  'oakleaf-red-lettuce',
  'baby-leeks',
  'long-red-mild-chillies',
  'long-beans',
  'mint',
  'thyme',
  'green-grapes-seedless',
  'pears',
  'pears',
  'watermelon-seedless',
  'avocado-green-fuerte',
  'celery-root',
  'turai-ridge-gourd',
  'turai-ridge-gourd',
  'green-chillies',
  'green-chillies',
  'celery',
  'celery',
  'celery',
  'black-grapes-seedless',
  'mix-fruit-basket-small',
  'mesclun-mix',
  'big-eggplant',
  'red-chillies',
  'red-lettuce-radicchio',
  'sweet-basil-leaves',
  'hot-basil-leaves',
  'jumbo-asparagus',
  'sweet-melon',
  'sweet-melon',
  'pomelo',
  'green-papaya',
  'potato-la-ratte',
  'padwal-snake-gourd',
  'maitake-mushroom',
  'lime-green-seedless',
  'karela-bitter-gourd',
  'potato-peeled',
  'orange-sukari',
  'mandarin',
  'red-globe-grapes',
  'red-globe-grapes',
  'family-box',
  'couples-box',
  'singles-box',
  'sweet-potato-cut-cube',
  'potato-french-fries',
  'potato-diced',
  'white-onion-peeled',
  'white-onion-julienne',
  'white-onion-chopped',
  'red-onion-peeled',
  'red-onion-julienne',
  'red-onion-chopped',
  'brown-onion-chopped',
  'brown-onion-julienne',
  'brown-onion-full-peeled',
  'carrot-sticks',
  'carrot-peeled',
  'carrot-shredded',
  'beetroot-sliced',
  'garlic-peeled',
  'cucumber-sliced',
  'cauliflower-floret',
  'yellow-capsicum-julienne',
  'red-capsicum-julienne',
  'green-capsicum-julienne',
  'green-capsicum-diced',
  'broccoli-floret',
  'parsley-sanitized',
  'coriander-sanitized',
  'white-cabbage-shredded',
  'red-cabbage-shredded',
  'watermelon-cubes',
  'sweet-melon-cubes',
  'rock-melon-cubes',
  'pomegranate-seeds-peeled',
  'pineapple-rings',
  'honeydew-melon-cubes',
  'yellow-zucchini',
  'green-zucchini',
  'green-baby-zucchini',
  'yellow-patty-pans',
  'yams-suran',
  'baby-turnip',
  'turnip',
  'vine-tomatoes',
  'plum-cherry-tomatoes',
  'plum-tomatoes',
  'tomato-yellow-cherry',
  'red-cherry-tomatoes-vine',
  'red-cherry-tomatoes',
  'beef-tomatoes',
  'tomatoes',
  'tapioca',
  'sugar-snap-peas',
  'spring-onions',
  'spinach',
  'snowpeas',
  'shishito-pepper',
  'rocket-leaves',
  'baby-rainbow-carrots',
  'baby-radish-red',
  'pumpkin-red',
  'agria-potatoes',
  'purple-potatoes',
  'new-potatoes',
  'idaho-potatoes',
  'baby-potatoes',
  'potatoes',
  'physalis-cape-gooseberries',
  'parsnips',
  'parsley-english',
  'parsley',
  'pakchoi',
  'white-onions',
  'red-onions',
  'pearl-baby-onions',
  'brown-onions',
  'okra',
  'white-mushroom',
  'white-shimeji-mushroom',
  'brown-shimeji-mushroom',
  'portobello-mushroom',
  'oyster-mushroom',
  'giant-mushroom',
  'enoki-mushroom',
  'lemon-grass',
  'lime-leaves',
  'romaine-lettuce',
  'lollo-rosso-lettuce',
  'lollo-green-bionda-lettuce',
  'iceberg-lettuce',
  'iceberg-lettuce',
  'gem-lettuce',
  'frisse-green-lettuce',
  'boston-lettuce',
  'leeks',
  'kale',
  'red-jalapeno',
  'green-jalapeno',
  'green-patty-pans',
  'ginger',
  'galanga',
  'fenugreek-methi-leaves',
  'eggplant',
  'curry-leaves',
  'drumstick',
  'dill-leaves',
  'yellow-cucumber',
  'english-cucumber',
  'sweet-corn',
  'baby-corn',
  'coriander',
  'cauliflower',
  'capsicum-mixed-3-color',
  'white-cabbage',
  'red-cabbage',
  'cabbage-chinese',
  'butternut-pumpkin',
  'broccoli',
  'beetroots',
  'fine-green-beans',
  'bean-sprouts',
  'basil-plant-pot',
  'basil',
  'baby-carrots',
  'baby-beetroot-red',
  'ash-gourd',
  'alfalfa-sprouts',
  'baby-fennel',
  'baby-capsicums-yellow',
  'baby-capsicums-red',
  'broccolini',
  'baby-beetroot-golden',
  'arugula-jir-jir',
  'strawberry',
  'red-currant',
  'raspberry',
  'rambutan',
  'baby-pineapple',
  'pineapple',
  'pineapple',
  'watermelon',
  'honeydew-melon',
  'honeydew-melon',
  'honeydew-melon',
  'longan',
  'tender-coconut',
  'blueberry',
  'blackberry',
  'pomegranate',
  'pears-coscia',
  'orange-valencia',
  'orange-navel',
  'orange-navel',
  'kumquats',
  'green-kiwi',
  'guava',
  'red-grapes-seedless',
  'red-grapes-seedless',
  'black-grapes',
  'grapefruit-red',
  'grapefruit-red',
  'dragon-fruit-white',
  'green-banana',
  'banana',
  'avocado-hass',
  'wallet-topup',
  null,
];

export interface ProductsProps {
  handle: string;
}

function Products({
  route: {
    params: {handle},
  },
  navigation,
}: NativeStackScreenProps<RootRoute, 'Products'>) {
  const preloadedQuery = useLazyLoadQuery<ProductsInfo_Query>(
    graphql`
      query ProductsInfo_Query($handle: String!) {
        product(handle: $handle) {
          id
          title
          featuredImage {
            altText
            height
            url
          }
          description
          availableForSale
          images(first: 100) {
            edges {
              node {
                url
                height
                altText
              }
            }
          }
        }
      }
    `,
    {
      handle,
    },
  );

  return (
    <View>
      <Text>{preloadedQuery.product?.title}</Text>
      <Image
        source={{uri: preloadedQuery.product?.featuredImage?.url}}
        style={{width: 120, height: 120}}
      />
      <Button
        onPress={() => {
          navigation.push('Products', {
            handle: products[Math.floor(Math.random() * products.length)]!,
          });
        }}
      >
        Hello world
      </Button>
    </View>
  );
}

export default withLoader(Products, () => <Text>Page is loading bro</Text>);
