
import { theme } from '@/testdata'

export default function Theme() {
	return (
        <div className='absolute top-0 left-0'>
            <div className='flex'>
                {Object.keys(theme).map((item, i) => <div key={i} className="w-10 h-10 mr-1" style={{background: theme[item]}} />)}
            </div>
        </div>
	)
}