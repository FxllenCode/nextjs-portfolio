---
title: "Opportunity Island - PGAS Project"
excerpt: "For our latest group project, we were assigned to work on a Social Studies related game, based on GA educational standards in economics. I had never used Unity before, so this was a fun and insightful project!"
coverImage: "/assets/blog/opportunity-island-pgas-project/Menu.PNG"
date: "2025-02-06T05:35:07.322Z"
ogImage:
  url: "/assets/blog/opportunity-island-pgas-project/Menu.PNG"
tags: ["education", "educators", "learning", "gamedev", "unity"]
---


This project was intended to show us how to build projects for clients as well as how to work based off of strict requirements. We were to create a game for 5th graders, based on the subject of Social Studies. We were given a few different standards to choose from, but we went with SS5E1(a), which says the following:

> Describe opportunity costs and their relationship to decision-making across time (e.g., decisions by individuals in response to rationing during WWII).

This set us up for a fun challenge: how could we make a game that taught these concepts to 5th grades in a short amount of time (about 3 weeks) created by a bunch of people who have no idea how to do gamedev in Unity? 

## The Initial Planning
Before we started Sprinting, we took a few days to plan out our project. We all had many ideas, and it was tough to get them together. We started by making user stories to help illustrate what a user was going to do in our game. Here's what mine looked like:

![UserStory](/assets/blog/opportunity-island-pgas-project/UserStories.PNG)

These helped us understand different aspects of how we need to create our game. Once we did that, it was time to create the game loop. I can admit that we were ambitious - but it was a lot of fun creating a game loop on a whiteboard and putting all of our ideas together!

![Board](/assets/blog/opportunity-island-pgas-project/Board.jpg)

Once we got everything in order, we added it to our Scrum board, and we were ready to sprint!

![Scrum](/assets/blog/opportunity-island-pgas-project/trello.PNG)

## Sprinting
During our Sprint period, I would on 2 major projects: Creating an integrated workflow for sharing our game, and making a cool dialogue system. Both were vastly different in their end results...

### Using GitHub to enable multiple people to work on one project

Ideally, I wanted to have a GitHub repository where our game was stored, and that way we could all easily work on the game on different computers, and merge the different work we each did into one master repository, to make it easy.

I embarked on this journey, following [this]() tutorial. And I got it working on one of our computers, until I ran into an issue: for some reason, the one computer I did it on was the *only* computer out of the ones in the classroom that did *not* block GitHub asset urls. So when it came time to clone the repository and the files for Git LFS, it failed every time due to network restrictions. This was frustrating, as I spent 2 days trying to get this working with no success.

## Creating a Dialogue system

I then decided to try and figure out how I was going to use Unity for my project. I have never used it before, so it was a learning curve just getting it open and figuring out the menus. I found a tutorial for a basic started template dialogue system, and that was super helpful. You can find it [here](https://www.youtube.com/watch?v=8oTYabhj248). It was flexible, so I added a bunch of other features, such as an icon for the character who is actively speaking. You can check it out in the game video. Here's the code for it:


```cs
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using TMPro;

public class Dialogue : MonoBehaviour
{
    // Start is called before the first frame update
    public TextMeshProUGUI textComponent;
    public Image imageComponent;
    public Sprite player;
    public Sprite teacher;
    public string[] lines;
    public float textSpeed;
    private int index;
    public string character;
    private string fullForEqual;
    private string toType;
    void Start()
    {
        textComponent.text = string.Empty;
        StartDialogue();
    }

    // Update is called once per frame
    void Update()
    {
        if(Input.GetMouseButtonDown(0))
        {
            if ( textComponent.text == fullForEqual ) {
            
                NextLine();
            } else {
                StopAllCoroutines();
                textComponent.text = fullForEqual;
            }
        }
    }

    void StartDialogue()
    {
        index = 0;
        StartCoroutine(TypeLine());
    }
    IEnumerator TypeLine() 
    {
        int index2 = lines[index].IndexOf(',');
        print(index2.ToString());
        character = lines[index].Substring(0, index2);
        textComponent.text += lines[index].Substring(0, index2) + ": ";
        fullForEqual += lines[index].Substring(0, index2) + ": ";
        toType = lines[index].Substring(index2 + 1);
        fullForEqual += toType;
        if (character == "Player") 
        {
                    imageComponent.sprite = player;

        } else {
            imageComponent.sprite = teacher;
        }
        {
        foreach (char c in toType.ToCharArray()) 
        {

            textComponent.text += c;
            yield return new WaitForSeconds(textSpeed);
        }
        }
    }
   
    void NextLine() 
    {
        if (index < lines.Length - 1 )
        {
            index++;
            textComponent.text = string.Empty;
            fullForEqual = string.Empty;
            StartCoroutine(TypeLine());
        } else {
            gameObject.SetActive(false);
        }
    }
}
```

## Final Result
We completed a game that sort of works, and mostly fits within the standard. While we did not have enough time to fully polish it or add every feature we wanted to, we do have a working MVP!

![vid](/assets/blog/opportunity-island-pgas-project/Recording.mp4)

[You can also run the exe if you really want.](/assets/blog/opportunity-island-pgas-project/Game.exe)

## Conclusion

Overall, this was an interesting project. I learned a lot about gamedev as well as how difficult it really can be to work in a large group on projects like this. I prefer working solo for sure. I wish we had more time to do this project, as I really liked our original idea of the game being sort of open world, but we ran out of time and had to scrap that at the last second. I don't really think that this would be very useful. [While there was a lesson plan made](/assets/blog/opportunity-island-pgas-project/Lesson.pdf), I just don't see when or why a teacher would want to use our subpar game. It's a fun idea in theory but it needs a lot more polishing. I was really happy with how my dialogue system turned out, and I wish I had many more hours to toy around with different mechanics, but time is very limited. While I enjoyed working on it, I do not think I would continue working on this project.