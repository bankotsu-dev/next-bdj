
import { getItems } from '@/lib/actions';
import { ItemCard } from './item-card';

export async function ItemGridCard() {
    const items = await getItems();
    
    return(
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
        {items.map((item) => <ItemCard item = {item} />)}
    </div>)
}