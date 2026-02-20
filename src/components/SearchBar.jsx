import {Search, X} from "lucide-react"

export default function SearchBar({searchTerm, setSearchTerm}) {
    const hasText = searchTerm.trim().length>0;

    return (
        <div className="glass rounded-4 p-3">
            <div className="input-group">
                <span className="input-group-text bg-transparent text-light border-0">
                    <Search size={18}/>
                </span>

                <input
                className="form-control bg-transparent text-light border-0"
                type="text"
                value={searchTerm}
                onChange={(e)=>{setSearchTerm(e.target.value)}}
                placeholder="Search Movie... (e.g, Dune, Harry Potter, Zootopia 2)"
                aria-label="Search Movies"
                />

                {hasText ? (
                    <button 
                    className="btn btn-sm btn-soft"
                    type="button"
                    onClick={()=>{setSearchTerm("")}}
                    aria-label="Clear search"
                    title="Clear"
                    >
                        <X size={16}/>
                    </button>
                ) : null }
            </div>

            <div className="mt-3 d-flex flex-wrap gap-2">
                {["Dune", "Harry Potter", "Zootopia 2"].map(
                    (chip) => (
                        <button
                            key={chip}
                            type="button"
                            className="btn btn-sm btn-soft rounded-pill"
                            onClick={() => setSearchTerm(chip)}
                        >
                            {chip}
                        </button>
                    )
                )}
            </div>
        </div>
    );
}