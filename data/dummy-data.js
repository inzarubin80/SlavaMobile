import Category from '../models/category';
import Product from '../models/product';


export const CATEGORIES = [
  new Category('c1', 'Белковая колбасная оболочка', ''),
  new Category('c2', 'Белковая сосисочная оболочка', ''),
  new Category('c3', 'Медицина', ''),
];



const imageUrl = 'http://belkozin.com/wp-content/uploads/2018/03/Belkozin_Packagig_frankfurter_01.png';

export const Products = [
 
  new Product('p1','c1','СК', 'Белковая колбасная оболочка для сырокопчёных колбас.', 'http://belkozin.com/wp-content/uploads/2018/03/Belkozin_sk_01.jpg'),
  new Product('p2','c1','УК', 'Белковая колбасная оболочка с улучшенной клипсуемостью.', 'http://belkozin.com/wp-content/uploads/2018/03/Belkozin_uk_02.jpg' ),
  
  new Product('p3','c2','ОСГ', 'Используется в производстве варёных, варёно-копчёных, полукопчёных сосисок, сарделек, сырокопчёных колбасок.', 'http://belkozin.com/wp-content/uploads/2018/03/Belkozin_sosisochnaya_01.jpg'),
  new Product('p4','c2','Альфа Оптима', 'Используется в производстве варёных, варёно-копчёных, полукопчёных сосисок, сарделек, сырокопчёных колбасок.', 'http://belkozin.com/wp-content/uploads/2018/03/Belkozin_sosisochnaya_01.jpg'),
  new Product('p5','c2','Альфа-F', 'Используется в производстве купатов, колбасок для жарки на сковороде, гриле и барбекю.', 'http://belkozin.com/wp-content/uploads/2018/03/Belkozin_sosisochnaya_01.jpg'),
  
  new Product('p6','c3','Губка ГЕМОСТАТИЧЕСКАЯ' ,'Губка биодеградируемая коллагеновая ГЕМОСТАТИЧЕСКАЯ', 'http://belkozin.com/wp-content/uploads/2018/03/gemostaticheskaya_full-1.png'),
  new Product('p7','c3','Губка ПРОТИВООЖОГОВАЯ' ,'Губка биодеградируемая коллагеновая ПРОТИВООЖОГОВАЯ', 'http://belkozin.com/wp-content/uploads/2018/03/protivoozhogovaya_full-1.png'),
  new Product('p8','c3','Губка РАНОЗАЖИВЛЯЮЩАЯ' ,'Губка биодеградируемая коллагеновая РАНОЗАЖИВЛЯЮЩАЯ', 'http://belkozin.com/wp-content/uploads/2018/03/ranozazhivlyayushhaya_full-1.png'),
  new Product('p9','c3','ГУБКА СТОМАТОЛОГИЧЕСКАЯ', 'ГУБКА СТОМАТОЛОГИЧЕСКАЯ “СТИМУЛ-ОСС”', 'http://belkozin.com/wp-content/uploads/2018/03/stimul-oss_full-1.png'),
  
];