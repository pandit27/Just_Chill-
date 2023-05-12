#include <iostream>
#include <vector>
#include <list>
#include <map>
#include <queue>

using namespace std;

class Solution
{
public:
    map<int, vector<int>> adj;

    void addEdge(int a, int b)
    {
        adj[a].push_back(b);
        adj[b].push_back(a); // only if the graph is undirected
    }

    vector<int> bfs(int n)
    {
        vector<int> vec;
        vector<bool> vis(n, false);

        queue<int> q;

        for (int i = 0; i < n; i++)
        {
            if (!vis[i])
            {
                q.push(i);
                vis[i] = true;

                while (!q.empty())
                {
                    int top = q.front();
                    q.pop();
                    vec.push_back(top);

                    for (auto it : adj[top])
                    {
                        if (!vis[it])
                        {
                            q.push(it);
                            vis[it] = true;
                        }
                    }
                }
            }
        }
        return vec;
    }
};

int main()
{
    int n = 10;

    Solution s;

    s.addEdge(0, 3);
    s.addEdge(1, 8);
    s.addEdge(5, 7);
    s.addEdge(3, 2);
    s.addEdge(1, 6);
    s.addEdge(7, 8);
    s.addEdge(0, 9);

    s.bfs(n);

    vector<int> v = s.bfs(n);

    for (auto it : v)
    {
        cout << it << endl;
    }

    return 0;
}