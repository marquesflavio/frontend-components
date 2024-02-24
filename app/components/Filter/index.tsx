'use client'
import { useEffect, useState } from "react";

interface Repo {
    name: string;
    description: string;
}

export function Filter() {
    const [repos, setRepos] = useState<Repo[]>([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetch('https://api.github.com/users/marquesflavio/repos')
            .then(response => response.json())
            .then(data => setRepos(data))
    }, [])

    const filteredRepos = search.length > 0
        ? repos.filter(repo => repo.name.includes(search))
        : [];

    return (
        <div>
            <input
                type="text"
                name="search"
                placeholder="Buscar..."
                onChange={e => setSearch(e.target.value)}
                value={search}
            />

            {search.length > 0 ? (

                <ul>
                    {filteredRepos.map(repo => {
                        return (
                            <li key={repo.name}>
                                {repo.name}
                            </li>
                        )
                    })}

                </ul>
            ) : <ul>
                {repos.map(repo => {
                    return (
                        <li key={repo.name}>
                            {repo.name}
                        </li>
                    )
                })}

            </ul>
            }
        </div>
    )
}